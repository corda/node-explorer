import * as vscode from 'vscode';
import { fileSync } from 'find';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

//Import the parser used to scan the local gradle files and set platform specific paths
var gjs = require('../parser');
var winPlatform = false;

var nodeConfig = [] as cordaNodeConfig;
var nodeDefaults: cordaNodeDefaultConfig;
var nodeDir = ''; // holds dir of build.gradle for referencing relative node dir
var nodeNames = [] as any;
var webViewPanels = [] as any;
var runningNodeTerminals = [] as vscode.Terminal[];

var watcher: vscode.FileSystemWatcher;

const clientToken = uuidv4();
const debug = true;


/**
 * activate runs when the extension is first loaded. 
 * It adds the custom commands to the command palette.
 * @param context - Container for the extensions context
 */
export function activate(context: vscode.ExtensionContext) {
	debug ? console.log("my Token: " + clientToken):"";

	var gradleCmd = "./gradlew ";
	if(process.platform.includes("win32") || process.platform.includes("win64")){
		winPlatform = true;
		gradleCmd = ".\\gradlew.bat ";
	}

	// initialize vars and parse build.gradle
	updateWorkspaceFolders();

	// clean project files
	let cordaClean = vscode.commands.registerCommand('extension.cordaClean', () => {		
		vscode.window.setStatusBarMessage('Running gradlew clean', 4000);
		if (areNodesDeployed() || filterNodeConfigToActive().length > 0) {
			vscode.window.showInformationMessage("Nodes are deployed and/or running. Clean will removes deployedNodes, and exits node explorer views.", 'Continue', 'Cancel')
			.then(selection => {
				if (selection === 'Cancel') {
					return 0;
				} else if (selection === 'Continue') {
					// deploy will break running nodes - must dispose
					clean();
				}
			});
		} else clean(); // default case

		function clean() {
			// clean will break running nodes - must dispose
			const name = 'Node Client Server'
			let terminal : vscode.Terminal = findTerminal(name);
			if (terminal) terminal.dispose();
			disposeRunningNodes();
			const execution = new vscode.ShellExecution(gradleCmd + 'clean');
			vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
				"Corda Clean", "Corda Command", execution));
		}
	});

	// assmble the project - this is like build w/o test
	let cordaAssemble = vscode.commands.registerCommand('extension.cordaAssemble', () => {
		vscode.window.setStatusBarMessage('Running gradlew assemble', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'assemble');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Assemble", "Corda Command", execution));
	});

	// build the project - assemble + test
	let cordaBuild = vscode.commands.registerCommand('extension.cordaBuild', () => {		
		vscode.window.setStatusBarMessage('Running gradlew build', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'build');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Build", "Corda Command", execution));
	});

	// test
	let cordaTest = vscode.commands.registerCommand('extension.cordaTest', () => {		
		vscode.window.setStatusBarMessage('Running gradlew test', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'test');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Test", "Corda Command", execution));
	});

	// deploys persistent test nodes defined in build.gradle - DependsOn: build.gradle deployNodes (nodeConfig)
	let cordaDeployNodes = vscode.commands.registerCommand('extension.cordaDeployNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew deployNodes', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'deployNodes');
		const deployNodeTask = new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Deploy Nodes", "Corda Command", execution);

		if ((nodeConfig as []).length == 0) { // no nodes in deployNodes task
			vscode.window.showInformationMessage("Ensure there are nodes defined " +
			"in your build.gradle deployNodes task");
			return 0;
		}
		if (areNodesDeployed()) {
			vscode.window.showInformationMessage("Nodes already deployed. Any running nodes or node explorer views will exit, Re-Deploy?", 'Continue', 'Cancel')
			.then(selection => {
				debug ? console.log(selection) : "";
				if (selection === 'Cancel') {
					return 0;
				} else if (selection === 'Continue') {
					// deploy will break running nodes - must dispose
					const name = 'Node Client Server'
					let terminal : vscode.Terminal = findTerminal(name);
					if (terminal) terminal.dispose();
					disposeRunningNodes();
					vscode.tasks.executeTask(deployNodeTask);
				}
			});
		} else {
			vscode.tasks.executeTask(deployNodeTask);
		}
	});

	// runs nodes which have been deployed - DependsOn: deployNodes
	let cordaRunNodes = vscode.commands.registerCommand('extension.cordaRunNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew cordaRunNodes', 4000);

		// check condition that deployNodes has been run at some point
		// if not, offer to deploy or do nothing.
		// else continue running nodes.
		if (!areNodesDeployed()) {
			vscode.window.showInformationMessage("Please deploy nodes first then try again.", 'Click to Deploy Nodes')
				.then(selection => {
					debug ? console.log(selection): "";
					if (selection === 'Click to Deploy Nodes') {
						vscode.commands.executeCommand('extension.cordaDeployNodes');
					}
				});
			
		} else {

			if (filterNodeConfigToActive().length > 0) { // nodes are already running
				vscode.window.showInformationMessage("Nodes are already running, Re-Run?", 'Yes', 'No')
				.then(selection => {
					debug ? console.log(selection):"";
					if (selection === 'No') {
						return 0;
					} else runNodes();
				});
			} else runNodes();

			function runNodes() {
				waitForGlobal(nodeNames, () => {
					disposeRunningNodes();
					// set port start points
					let port = 5005;
					let logPort = 7005;
					for (let index in nodeNames) { // create new terminals
						const name = nodeNames[index];
						const cmd1 = 'cd ' + path.join(nodeDir, 'build/nodes', name);
						// const cmd2 = 'java -Dcapsule.jvm.args=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=' + port + ' -javaagent:drivers/jolokia-jvm-1.6.0-agent.jar=port=' + logPort + ',logHandlerClass=net.corda.node.JolokiaSlf4jAdapter -Dname=' + name + ' -jar ' + 'corda.jar';
						const cmd2 = 'java -jar corda.jar';
						let terminal = vscode.window.createTerminal(name);
						terminal.show();
						terminal.sendText(cmd1);
						terminal.sendText(cmd2);
						port++;
						logPort++;
						runningNodeTerminals.push(terminal); // add to global list
					}
					vscode.workspace.getConfiguration('vscode-corda').update("nodesAreRunning", true); // update setting
				});
			}
		}
	});

	// opens up webview for interacting with nodes (local or remote) - DependsOn: runNodes (optional)
	let cordaShowNodeExplorerView = vscode.commands.registerCommand('extension.cordaShowNodeExplorer', () => {
		vscode.window.setStatusBarMessage('Displaying Corda Node Explorer', 4000);
		
		// check if local nodes are already running
		if (!areNodesDeployed()) { // nodes aren't deployed
			vscode.window.showInformationMessage("Local nodes available in build.gradle but not deployed. Deploy and run first; or use a remote node.", 'Cancel', 'Use Remote Node')
			.then(selection => {
				debug ? console.log(selection):"";
				if (selection === 'Use Remote Node') {
					launchClient();
					launchView(context, 'Node Explorer', true);
				} else if (selection === 'Cancel') {
					return 0;
				}
			});
		} else if (areNodesDeployed() && filterNodeConfigToActive().length == 0) { // filterNodeConfigToActive represents what nodes are running TODO: change this var.
			vscode.window.showInformationMessage("Local nodes deployed but not running.", 'Run Local Nodes', 'Use Remote Node')
			.then(selection => {
				debug ? console.log(selection):"";
				if (selection === 'Use Remote Node') {
					launchClient();
					launchView(context, 'Node Explorer', true);
				} else if (selection === 'Run Local Nodes') {
					vscode.commands.executeCommand('extension.cordaRunNodes');
					vscode.window.showInformationMessage("Local nodes starting up. Re-launch the Node Explorer after completion");
				}
			});
		} else { // nodes deployed and running
			launchClient();
			// Update CorDapp dirs for nodes in nodeConfig
			waitForGlobal(nodeConfig, () => {
				for (let index in nodeConfig) {
					let name = nodeConfig[index].name.match("O=(.*),L")![1];
					nodeConfig[index].cordappDir = path.join(nodeDir, 'build/nodes', name, 'cordapps');
				}
			})
			launchView(context, 'Node Explorer');
		}
	});

	// stop all running nodes - available when there are local nodes running
	let cordaStopRunningNodes = vscode.commands.registerCommand('extension.cordaStopRunningNodes', () => {
		vscode.window.setStatusBarMessage('Stopping all local Corda Nodes', 4000);
		disposeRunningNodes();
	});

	// notification that current project isn't Corda
	let cordaNoGradle = vscode.commands.registerCommand('extension.cordaNoGradle', () => {
		vscode.window.showInformationMessage('Current folder does not contain a valid build.gradle for Corda.');
	});

	// Context Subscriptions
	context.subscriptions.push(cordaClean);
	context.subscriptions.push(cordaAssemble);
	context.subscriptions.push(cordaBuild);
	context.subscriptions.push(cordaTest);
	context.subscriptions.push(cordaDeployNodes);
	context.subscriptions.push(cordaRunNodes);
	context.subscriptions.push(cordaShowNodeExplorerView);
	context.subscriptions.push(cordaStopRunningNodes);
	context.subscriptions.push(cordaNoGradle);
	
}

function launchClient() {
	// Launch client
	const name = 'Node Client Server'
	let terminal : vscode.Terminal = findTerminal(name);
	if (!terminal) { // check if client already launched
		const jarPath = vscode.extensions.getExtension("R3.vscode-corda")?.extensionPath;
		const cmd1 = 'cd ' + jarPath;
		const cmd2 = 'java -jar explorer-server-0.1.0.jar --servertoken=' + clientToken;
		terminal = vscode.window.createTerminal(name);
		terminal.sendText(cmd1);
		terminal.sendText(cmd2);
		debug ? console.log("Client Launch Successful"):"";
	} else {
		debug ? console.log("Client Already Up"):"";
	}
}

/**
 * getTerminalsForNodes returns a list of all running nodes (if exists)
 */
function getTerminalsForNodes() : vscode.Terminal[] | undefined {
	let terminals = [] as vscode.Terminal[];
	for(let index in nodeNames) {
		const terminal : vscode.Terminal = findTerminal(nodeNames[index]);
		if (terminal !== undefined) {
			terminals.push(terminal);
		}
	}
	if (terminals.length == 0) return undefined;
	return terminals;
}

/**
 * waitForGlobal delays a callback until a variable has been defined
 * @param key
 * @param callback 
 */
var waitForGlobal = function(key : any, callback : any) {
	if (key.length > 0) {
	  callback();
	} else {
	  setTimeout(function() {
		waitForGlobal(key, callback);
	  }, 100);
	}
  };

/**
 * areNodesDeployed checks if nodes are already deployed in project
 */
function areNodesDeployed() {
	const fs = require('fs');
	const nodePath = path.join(nodeDir, 'build/nodes')
	return fs.existsSync(nodePath);
}

/**
 * disposeRunningNodes is for disposing terminals/views where it makes sense - i.e.
 * a command will fundamentally change or break the current state
 */
function disposeRunningNodes(){
	debug ? console.log("Disposing runningNode terminals"):"";
	for (let i = 0; i < runningNodeTerminals.length; i++) {
		runningNodeTerminals[i].sendText('bye');
		runningNodeTerminals[i].dispose();
	}
	for (let i = 0; i < webViewPanels.length; i++) { // close all open webview panels
		webViewPanels[i].dispose();
		webViewPanels[i] = null;
	}

	runningNodeTerminals = [] as vscode.Terminal[];
	webViewPanels = [] as any;
	vscode.workspace.getConfiguration('vscode-corda').update("nodesAreRunning", false); // update setting
}

/**
 * findTerminal returns the instance of the terminal identified by the argument
 * @param termName - terminal to find
 */
function findTerminal(termName : string) {
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const terminal : any = terminals.filter(t => {
		return t.name == termName;
	});
	return terminal.length > 0 ? terminal[0] : undefined;
}

/**
 * launchView creates the HTML file that the react code will be hooked into. 
 * @param context - Context of the extension
 * @param view - Name of the view being loaded 
 */
function launchView(context: any, view: string, remoteLogin?: boolean){
	const nodeExplorerPanel = vscode.window.createWebviewPanel('reactView', 'Corda ' + view, vscode.ViewColumn.Active, {
		enableScripts: true,
		retainContextWhenHidden: true,
		localResourceRoots: [ vscode.Uri.file(path.join(context.extensionPath, 'out')) ]
	});

	// filter nodeList (nodeConfig) to only running nodes for props to UI. - isGradleNodeAvailble should only check size.
	let nodeList = filterNodeConfigToActive();
	let gradleNodesRunning : boolean = (nodeList.length > 0);
	
	
	nodeExplorerPanel.webview.html = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			
			<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
		</head>
		<body>
			<div id="nodeDefaults" style="display:none">${JSON.stringify(nodeDefaults)}</div>
			<div id="nodeList" style="display:none">${JSON.stringify(nodeList)}</div>
			<div id="gradleNodesRunning" style="display:none">${JSON.stringify(gradleNodesRunning)}</div>
			<div id="clienttoken" style="display:none">${clientToken}</div>
			<div id="remotelogin" style="display:none">${remoteLogin}</div>
			<div id="root"></div>
			${loadScript(context,path.normalize('out/') + 'index' + '.js') /* e.g /out/transactionExplorer.js */}
			
		</body>
		</html>
	`;
	webViewPanels.push(nodeExplorerPanel);
}

/** 
 * loadScript is used to load the react files into the view html
 * @param context - Container for the extensions context
 * @param path - location of the react js files
 */
function loadScript(context: vscode.ExtensionContext, path: string) {
    return `<script src="${vscode.Uri.file(context.asAbsolutePath(path)).with({ scheme: 'vscode-resource'}).toString()}"></script>`;
}

function filterNodeConfigToActive() : cordaNodeConfig[] {
	// filter out notary as well as we won't establish connection to notaries.
	let activeNodeConfig = (nodeConfig as []).filter((node : any) => {
		return findTerminal(node.name.match("O=(.*),L")![1]) && !node.notary;
	});
	return activeNodeConfig;
}

/**
 * updateWorkspaceFolders looks through the currently active workspace for gradle files and then passes these to be scanned.
 */ 
function updateWorkspaceFolders(): any {
	if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length < 1) {
		// no active workspace folders, abort
		return 0;
	}

	//TODO Only supports one workspace folder for now, add support for multiple (named targets)
	const projectCwd = vscode.workspace.workspaceFolders[0].uri.fsPath;   //.uri.path;
	let pCwdPath = path.join(projectCwd, '/build.gradle'); // path for checking if corda project

	const fs = require('fs');
	debug ? console.log('Root gradle file at ' + pCwdPath):"";

	// TestRunner JDT fix - injects a prefs file for proper compilation when going through JDT compiler
	function setJDTpref() {
		const settingsPath = path.resolve(projectCwd, '.settings');
		const filePath = path.resolve(settingsPath,'org.eclipse.jdt.core.prefs');
		if (!fs.existsSync(filePath)) {
			if (!fs.existsSync(settingsPath)){
				fs.mkdirSync(settingsPath);
			}

			const content = 'org.eclipse.jdt.core.compiler.codegen.methodParameters=generate';

			fs.writeFile(filePath, content, (err : any) => {
				if (err) {
					console.error(err)
					return
				}
			});
		}
	}
	setJDTpref();

	// Watcher for gradle.build refresh
	let pattern = new vscode.RelativePattern(projectCwd, '**/*.gradle');
    watcher = vscode.workspace.createFileSystemWatcher(pattern);
	watcher.onDidChange((event) => { 
		watcher.dispose();
		debug ? console.log(`gradle file changed: ${event.fsPath}`):""; 
		updateWorkspaceFolders();
		vscode.window.showInformationMessage("build.gradle was updated. Re-deploy nodes if needed.");
	})

	// enable or disable corda commands based on whether build.gradle exists in workspace dir
	// and whether the gradle is 'related' to a corda deploy (assessed by keyword 'corda')
	var gradleIsCorda = false;
	try {
		if (fs.existsSync(pCwdPath)) {
			let contents = fs.readFileSync(pCwdPath);
			if (contents.includes('corda')) {
				gradleIsCorda = true;
				debug ? console.log("gradleIsCorda is True"):"";
			}
		}
	} catch(err) {
		console.log(err);
	}

	try {
		if (!gradleIsCorda) {
			debug ? console.log("no gradle files found disabling corda commands"):"";
			vscode.workspace.getConfiguration('vscode-corda').update("isCordaProject", false);
			return 1;
		} else {
			// launch client at startup
			launchClient();
			// Search for build.gradle files & scan them for node config's
			let files = fileSync(/build.gradle$/, projectCwd);
			for(let i = 0; i < files.length; i++){
				scanGradleFile(files[i], i === files.length - 1);
			}
			debug ? console.log("gradle file found enabling corda commands"):"";
			vscode.window.setStatusBarMessage('Loading nodes from gradle', 4000);
			vscode.workspace.getConfiguration('vscode-corda').update("isCordaProject", true);
			vscode.window.setStatusBarMessage("Corda-Project"); // identify project as Corda
		}
	} catch(err) {
		console.error(err);
	}
}

/**
 * scanGradleFile uses the imported parser to scan through a passed in file. 
 * If it detects that the parse has returned attributes that we'd expect in the gradle file that defines the nodes, 
 * it will load the contents of that file into the nodeConfig variable (which will then be used to 
 * pass connection information up to the views).
 * @param fileName - location of the file to parse
 * @param last - boolean that indicates whether this is the last file that needs to be scanned
 */
function scanGradleFile(fileName : String, last: boolean): any {
	
	gjs.parseFile(fileName).then(function (representation : cordaTaskConfig) {
		// Pick up any other configuration we might need in this parse loop and assign it to our globals
		if (representation.task !== undefined && representation.task.node !== undefined) {
			if(representation.task.nodeDefaults){
				nodeDefaults = representation.task.nodeDefaults as cordaNodeDefaultConfig;
			}else{
				nodeDefaults = {rpcUsers : {} };
			}
			nodeConfig = representation.task.node as cordaNodeConfig;
			nodeDir = fileName.replace('build.gradle','');
		}
		
		if(last){
			// reset nodeNames
			nodeNames = [] as any;
			for(let index in nodeConfig) {
				nodeNames.push(nodeConfig[index].name.match("O=(.*),L")![1]);
			}
			console.log('Node names in build.gradle are: ' + JSON.stringify(nodeNames));
		}
	});
}
   
// tslint:disable-next-line: class-name
interface cordaNodeConfig {
	[index: number]: { name: string; notary: []; p2pPort: string, rpcSettings : any, rpcUsers : any, cordappDir: string};
}

// tslint:disable-next-line: class-name
interface cordaNodeDefaultConfig{
	rpcUsers: any;
}

// tslint:disable-next-line: class-name
interface cordaNodesConfig {
	node: cordaNodeConfig;
	nodeDefaults: cordaNodeDefaultConfig;
}


// tslint:disable-next-line: class-name
interface cordaTaskConfig {
	task: cordaNodesConfig;
}

// this method is called when your extension is deactivated
export function deactivate() {
	//TODO close terminals
}
