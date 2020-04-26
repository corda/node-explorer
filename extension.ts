import * as vscode from 'vscode';
import { fileSync } from 'find';
import * as path from 'path';

//Import the parser used to scan the local gradle files and set platform specific paths
var gjs = require('../parser');
var winPlatform = false;

var nodeConfig = [] as cordaNodeConfig;
var nodeDefaults: cordaNodeDefaultConfig;
var nodeDir = ''; // holds dir of build.gradle for referencing relative node dir
var nodeNames = [] as any;
var webViewPanels = [] as any;

/**
 * activate runs when the extension is first loaded. 
 * It adds the custom commands to the command palette.
 * @param context - Container for the extensions context
 */
export function activate(context: vscode.ExtensionContext) {
	var gradleCmd = "./gradlew ";
	if(process.platform.includes("win32") || process.platform.includes("win64")){
		winPlatform = true;
		gradleCmd = "gradlew ";
	}

	// initialize vars and parse build.gradle
	updateWorkspaceFolders();

	// clean project files
	let cordaClean = vscode.commands.registerCommand('extension.cordaClean', () => {		
		vscode.window.setStatusBarMessage('Running gradlew clean', 4000);
		// clean will break running nodes - must dispose
		disposeRunningNodes();
		const execution = new vscode.ShellExecution(gradleCmd + 'clean');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Clean", "Corda Command", execution));
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

	// deploys persistent test nodes defined in build.gradle
	let cordaDeployNodes = vscode.commands.registerCommand('extension.cordaDeployNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew deployNodes', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'deployNodes');
		const deployNodeTask = new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Deploy Nodes", "Corda Command", execution);
		if (areNodesDeployed()) {
			vscode.window.showInformationMessage("Nodes are already deployed, Re-Deploy?", 'Yes', 'No')
			.then(selection => {
				console.log(selection);
				if (selection === 'No') {
					return 0;
				} else if (selection === 'Yes') {
					// deploy will break running nodes - must dispose
					disposeRunningNodes();
					vscode.tasks.executeTask(deployNodeTask);
				}
			});
		} else {
			vscode.tasks.executeTask(deployNodeTask);
		}
	});

	// runs nodes which have been deployed
	let cordaRunNodes = vscode.commands.registerCommand('extension.cordaRunNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew cordaRunNodes', 4000);

		// check condition that deployNodes has been run at some point
		// if not, offer to deploy or do nothing.
		// else continue running nodes.
		if (!areNodesDeployed()) {
			vscode.window.showInformationMessage("Cannot run nodes until they have been deployed - Deploy Nodes then try again.", 'Click to Deploy Nodes')
				.then(selection => {
					console.log(selection);
					if (selection === 'Click to Deploy Nodes') {
						vscode.commands.executeCommand('extension.cordaDeployNodes');
					}
				});
			
		} else {
			
			waitForGlobal(nodeNames, () => {
				disposeRunningNodes(); // If runningNode terminals are open, dispose.
				// set port start points
				var port = 5005;
				var logPort = 7005;
				for (var index in nodeNames) { // create new terminals
					const name = nodeNames[index];
					const cmd1 = 'cd ' + path.join('build/nodes', name);
					const cmd2 = 'java -Dcapsule.jvm.args=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=' + port + ' -javaagent:drivers/jolokia-jvm-1.6.0-agent.jar=port=' + logPort + ',logHandlerClass=net.corda.node.JolokiaSlf4jAdapter -Dname=' + name + ' -jar ' + 'corda.jar';
					let terminal = vscode.window.createTerminal(name);
					terminal.show();
					terminal.sendText(cmd1);
					terminal.sendText(cmd2);
					port++;
					logPort++;
				}
			});
		}
	});

	// opens up webview for interacting with nodes (local or remote)
	let cordaShowNodeExplorerView = vscode.commands.registerCommand('extension.cordaShowNodeExplorer', () => {
		vscode.window.setStatusBarMessage('Displaying Corda Node Explorer', 5000);
		
		// check if local nodes are already running - TODO: move to function
		var terminals = [] as vscode.Terminal[];
		for(var index in nodeNames) {
			const terminal : vscode.Terminal = findTerminal(nodeNames[index]);
			if (terminal !== undefined) {
				terminals.push(terminal);
			}
		}
		if (areNodesDeployed() && terminals.length == 0) {
			vscode.window.showInformationMessage("Local nodes are deployed but not running, would you like to RunNodes? Selecting 'No'" +
			" will still allow you to connect to a remote node.", 'Yes', 'No')
			.then(selection => {
				console.log(selection);
				if (selection === 'No') {
					launchClient();
				} else if (selection === 'Yes') {
					vscode.commands.executeCommand('extension.cordaRunNodes');
					vscode.window.showInformationMessage("Nodes are being run. Relauch the Node Explorer after completion");
				}
			});
		} else {
			launchClient()
		}

		function launchClient() {
			// Launch client
			const name = 'Node Client Server'
			var terminal : vscode.Terminal = findTerminal(name);
			if (!terminal) { // check if client already launched
				const jarPath = vscode.extensions.getExtension("R3.vscode-corda")?.extensionPath;
				const cmd1 = 'cd ' + jarPath;
				const cmd2 = 'java -jar explorer-server-0.1.0.jar';
				terminal = vscode.window.createTerminal(name);
				terminal.show();
				terminal.sendText(cmd1);
				terminal.sendText(cmd2);
				console.log("Client Launch Successful");
			} else {
				console.log("Client Already Up");
			}

			// Update CorDapp dirs for nodes in nodeConfig
			waitForGlobal(nodeConfig, () => {
				for (var index in nodeConfig) {
					var name = nodeConfig[index].name.match("O=(.*),L")![1];
					nodeConfig[index].cordappDir = path.join(nodeDir, 'build/nodes', name, 'cordapps');
				}
			})

			launchView(context, 'Node Explorer'); // launch the node-explorer webview
		}
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
	context.subscriptions.push(cordaNoGradle);
	
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
	console.log("Disposing runningNode terminals");
	var terminals = [] as vscode.Terminal[];
	for(var index in nodeNames) {
		const terminal : vscode.Terminal = findTerminal(nodeNames[index]);
		if (terminal !== undefined) {
			terminal.sendText('bye'); // graceful node shutdown
			terminals.push(terminal);
		}
	}
	if (terminals.length > 0) {
		terminals.map(t => {t.dispose()})
	}
	for (var i = 0; i < webViewPanels.length; i++) { // close all open webview panels
		webViewPanels[i].dispose();
		webViewPanels[i] = null;
	}
	webViewPanels = [] as any;
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
function launchView(context: any, view: string){
	const nodeExplorerPanel = vscode.window.createWebviewPanel('reactView', view, vscode.ViewColumn.Active, {
		enableScripts: true,
		retainContextWhenHidden: true,
		localResourceRoots: [ vscode.Uri.file(path.join(context.extensionPath, 'out')) ]
	});
	
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
			<div id="nodeList" style="display:none">${JSON.stringify(nodeConfig)}</div>
			<div id="gradleNodesRunning" style="display:none">${JSON.stringify(isGradleNodeAvailable())}</div>
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

/**
 * isGradleNodeAvailable checks to see if the first node defined in the gradle is currently running so that the Node Explorer
 * view can auto-connect
 * 
 * TODO: this method has a bug in that, it will still LIST all nodes in the drop-down connector of the node-explorer
 * (even if 'some' of the gradle nodes are not currently running). The fix should be to pass the filter the launchView props
 * 'nodeDefaults' to ONLY contain nodes that are currently running.
 */
function isGradleNodeAvailable() {
	var nodeName = nodeConfig[0].name.match("O=(.*),L")![1];
	if (vscode.window.terminals.find((value) => {
		return value.name === nodeName;
	}) === undefined) {
		console.log("Nodes are NOT running");
		return false;
	} else {
		console.log("Nodes are running");
		return true;
	}
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
	const projectCwd = vscode.workspace.workspaceFolders[0].uri.path;
	let pCwdPath = path.join(projectCwd, '/build.gradle'); // path for checking if corda project

	const fs = require('fs');
	console.log(pCwdPath);

	// enable or disable corda commands based on whether build.gradle exists in workspace dir
	// and whether the gradle is 'related' to a corda deploy (assessed by keyword 'corda')
	var gradleIsCorda = false;
	try {
		if (fs.existsSync(pCwdPath)) {
			let contents = fs.readFileSync(pCwdPath);
			if (contents.includes('corda')) {
				gradleIsCorda = true;
				console.log("gradleIsCorda is True");
			}
		}
	} catch(err) {
		console.log(err);
	}

	try {
		if (!gradleIsCorda) {
			console.log("no gradle files found disabling corda commands");
			vscode.workspace.getConfiguration('vscode-corda').update("isCordaProject", false);
			return 1;
		} else {
			// Search for build.gradle files & scan them for node config's
			let files = fileSync(/build.gradle$/, projectCwd);
			for(var i = 0; i < files.length; i++){
				scanGradleFile(files[i], i === files.length - 1);
			}
			console.log("gradle file found enabling corda commands");
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
			for(var index in nodeConfig) {
				nodeNames.push(nodeConfig[index].name.match("O=(.*),L")![1]);
			}
			console.log(JSON.stringify(nodeNames));
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
