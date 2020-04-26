import * as vscode from 'vscode';
import { fileSync } from 'find';
import * as path from 'path';

// var terminals = vscode.workspace.getConfiguration().get('terminal') as any;

//Import the parser used to scan the local gradle files and set platform specific paths
var gjs = require('../parser');
var winPlatform = false;

var nodeConfig = [] as cordaNodeConfig;
var nodeDefaults: cordaNodeDefaultConfig;
var nodeDir = ''; // holds dir of build.gradle for referencing relative node dir
var nodeLoaded = false;
var webViewPanels = [] as any;
var nodeNames = [] as any;

var projectCwd = '';

/** 
 * loadScript is used to load the react files into the view html
 * @param context - Container for the extensions context
 * @param path - location of the react js files
 */
function loadScript(context: vscode.ExtensionContext, path: string) {
	if(winPlatform){
		path = path.replace(/\//g, "\\");
	}
    return `<script src="${vscode.Uri.file(context.asAbsolutePath(path)).with({ scheme: 'vscode-resource'}).toString()}"></script>`;
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

	// initialize
	updateWorkspaceFolders();

	let cordaClean = vscode.commands.registerCommand('extension.cordaClean', () => {		
		vscode.window.setStatusBarMessage('Running gradlew clean', 4000);
		// clean will break running nodes - must dispose
		disposeRunningNodes();
		const execution = new vscode.ShellExecution(gradleCmd + 'clean');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Clean", "Corda Command", execution));
	});

	let cordaBuild = vscode.commands.registerCommand('extension.cordaBuild', () => {		
		vscode.window.setStatusBarMessage('Running gradlew build', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'build');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Build", "Corda Command", execution));
	});

	let cordaTest = vscode.commands.registerCommand('extension.cordaTest', () => {		
		vscode.window.setStatusBarMessage('Running gradlew test', 4000);
		const execution = new vscode.ShellExecution(gradleCmd + 'test');
		vscode.tasks.executeTask(new vscode.Task({type: "cordaGradle"}, vscode.TaskScope.Workspace,
			"Corda Test", "Corda Command", execution));
	});

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

	let cordaShowNodeExplorerView = vscode.commands.registerCommand('extension.cordaShowNodeExplorer', () => {
		vscode.window.setStatusBarMessage('Displaying Corda Node Explorer', 5000);
		var viewIsLaunched = false;
		for (var i = 0; i < 10; i++) {
			(function (i) {
			  setTimeout(function () {
				if(nodeLoaded){
					if(!viewIsLaunched){
						viewIsLaunched = true;
						launchView(context, "Node Explorer");
					}
				}
			  }, 3000*i);
			})(i);
		  }	
	});

	let cordaNoGradle = vscode.commands.registerCommand('extension.cordaNoGradle', () => {
		vscode.window.showInformationMessage('Current folder does not contain a valid build.gradle for Corda.');
	});

	// Context Subscriptions
	context.subscriptions.push(cordaClean);
	context.subscriptions.push(cordaBuild);
	context.subscriptions.push(cordaTest);
	context.subscriptions.push(cordaDeployNodes);
	context.subscriptions.push(cordaRunNodes);
	context.subscriptions.push(cordaShowNodeExplorerView);
	context.subscriptions.push(cordaNoGradle);
	
}

function disposeRunningNodes(){
	console.log("Disposing runningNode terminals");
	var terminals = [] as vscode.Terminal[];
	for(var index in nodeNames) {
		const terminal = findTerminal(nodeNames[index]);
		if (terminal !== undefined) {
			terminals.push(terminal);
		}
	}
	if (terminals.length > 0) {
		terminals.map(t => {t.dispose()})
	}
	// if (gradleTerminal !== null) {
	// 	gradleTerminal.dispose();
	// 	gradleTerminal = null;
	// }
	// if (clientTerminal !== null) { // remove client terminal
	// 	clientTerminal.dispose();
	// 	clientTerminal = null;
	// }
	// for (var j = 0; j < openTerminals.length; j++) { // remove all running node terminals
	// 	openTerminals[j].dispose();
	// 	openTerminals[j] = null;
	// }
	// openTerminals = [] as any;
	// for (var i = 0; i < webViewPanels.length; i++) { // close open webview panels
	// 	webViewPanels[i].dispose();
	// 	webViewPanels[i] = null;
	// }
	// webViewPanels = [] as any;
}

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
	// LAUNCH BACKEND
	launchViewBackend();

	const panel = vscode.window.createWebviewPanel('reactView', "Corda View " + view, vscode.ViewColumn.Active, {
		enableScripts: true,
		retainContextWhenHidden: true,
		localResourceRoots: [ vscode.Uri.file(path.join(context.extensionPath, 'out')) ]
	});
	
	panel.webview.html = `
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

	webViewPanels.push(panel); // store panel in global
}

/**
 * launchViewBackend runs the server used by the views.
 */
function launchViewBackend() {

	// // update cordapp dirs on nodes in node config
	// for (var index in nodeConfig) {
	// 	var name = nodeConfig[index].name.match("O=(.*),L")![1];
	// 	if (winPlatform) {
	// 		nodeConfig[index].cordappDir = nodeDir + "build\\nodes\\" + name + "\\cordapps";
	// 	} else {
	// 		nodeConfig[index].cordappDir = nodeDir + "build/nodes/" + name + "/cordapps";
	// 	}
	// }

	// if (vscode.window.terminals.find((value) => {
	// 	return value.name === "Client Launcher";
	// }) === undefined) {
	// 	clientTerminal = launchClient();
	// 	console.log("Client Launch successful");
	// } else {
	// 	console.log("Client already up");
	// }
}

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
 * launchClient runs the server jar that is packaged with the extension
 */
function launchClient() {
	var shellArgs = [] as any;
	var cmd = "";

	// if(winPlatform){
	// 	if(shellExecPath.includes("powershell")){
	// 		cmd = "cd \"" + jarDir + "; java -jar explorer-server-0.1.0.jar"; 
	// 	}else{
	// 		cmd = "cd " + jarDir + " && java -jar explorer-server-0.1.0.jar";
	// 	}
	// }else{
	// 	cmd = 'cd ' + jarDir + ' && java -jar explorer-server-0.1.0.jar';
	// }
	
	// let terminal = vscode.window.createTerminal("Client Launcher", shellExecPath, shellArgs);
	// terminal.show(true);
	// terminal.sendText(cmd);
	// return terminal;
}

/**
 * checks if nodes are already deployed
 */
function areNodesDeployed() {
	const fs = require('fs');
	const nodePath = path.join(nodeDir, 'build/nodes')
	return fs.existsSync(nodePath);
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
	projectCwd = vscode.workspace.workspaceFolders[0].uri.path;
	let path = projectCwd + '/build.gradle'; // path for checking if corda project
	if(winPlatform){
		projectCwd = projectCwd.replace(/\//g, "\\").slice(1);
		path = projectCwd + '\\build.gradle';
	}

	const fs = require('fs');
	console.log(path);

	// enable or disable corda commands based on whether build.gradle exists in workspace dir
	// and whether the gradle is 'related' to a corda deploy (assessed by keyword 'corda')
	var gradleIsCorda = false;
	try {
		if (fs.existsSync(path)) {
			let contents = fs.readFileSync(path);
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
			nodeLoaded = true;
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
