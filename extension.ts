import * as vscode from 'vscode';
import { fileSync } from 'find';
import * as path from 'path';

var terminals = vscode.workspace.getConfiguration().get('terminal') as any;

//Import the parser used to scan the local gradle files and set platform specific paths
//-- Begin platform handling
var gjs = require('../parser');
var winPlatform = false;
var locationOfViews = '';
var ext = vscode.extensions.getExtension("R3.vscode-corda"); // stored for undefined check
var jarDir = ext ? ext.extensionPath : null;
var shellExecPath = '';

if(process.platform.includes("win32") || process.platform.includes("win64")){
	winPlatform = true;
	locationOfViews = 'out\\';
	jarDir = jarDir ? jarDir.replace(/\//g, "\\") : null;
	shellExecPath = terminals.external.windowsExec;
}else{
	locationOfViews = 'out/';
	shellExecPath = 'bash';
}
//-- End platform handling

var nodeConfig = [] as cordaNodeConfig;
var nodeDefaults: cordaNodeDefaultConfig;
var nodeDir = ''; // holds dir of build.gradle for referencing relative node dir
var openTerminals = [] as any; // terminals holding run-node instances
var nodeLoaded = false;
var gradleTerminal = null as any;
var clientTerminal = null as any;
var webViewPanels = [] as any;

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
 * activate runs when the extension is first loaded. 
 * It adds the custom commands to the command palette.
 * @param context - Container for the extensions context
 */
export function activate(context: vscode.ExtensionContext) {
	console.log('vscode-corda is now active');
	//vscode.window.showInformationMessage("Corda project detected - Features available in Command Palette");

	// monitor workspace folder changes so we can parse the corda gradle config
	//context.subscriptions.push(vscode.workspace.onDidChangeWorkspaceFolders(e => updateWorkspaceFolders()));

	// initialize
	updateWorkspaceFolders();

	let cordaClean = vscode.commands.registerCommand('extension.cordaClean', () => {		
		console.log("Removing all existing node windows...");
		// dispose any terminals if exist
		disposeRunningNodes();
		console.log("Execute 'Clean'...");

		vscode.window.setStatusBarMessage('Running gradlew clean', 4000);
		
		gradleRun('clean');
	});

	let cordaBuild = vscode.commands.registerCommand('extension.cordaBuild', () => {		
		vscode.window.setStatusBarMessage('Running gradlew build', 4000);
		gradleRun('build');
	});

	let cordaTest = vscode.commands.registerCommand('extension.cordaTest', () => {		
		vscode.window.setStatusBarMessage('Running gradlew test', 4000);
		gradleRun('test');
	});

	let cordaDeployNodes = vscode.commands.registerCommand('extension.cordaDeployNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew deployNodes', 4000);
		if (areNodesDeployed()) {
			vscode.window.showInformationMessage("Nodes are already deployed, Re-Deploy?", 'Yes', 'No')
			.then(selection => {
				console.log(selection);
				if (selection === 'No') {
					return 0;
				} else if (selection === 'Yes') {
					gradleRun('deployNodes');
				}
			});
		} else {
			gradleRun('deployNodes');
		}
	});

	let cordaRunNodes = vscode.commands.registerCommand('extension.cordaRunNodes', () => {		
		vscode.window.setStatusBarMessage('Running gradlew cordaRunNodes', 4000);

		// TODO: give option to RE-RUN nodes by launching command twice.

		var nodesAreRunning = false;
		for (var i = 0; i < 10; i++) {
			(function (i) {
			  setTimeout(function () { // timeout handles windows issue with async
				if(nodeLoaded){
					if(!nodesAreRunning){
						nodesAreRunning = true;
						runNodes();
					}
				}
			  }, 3000*i);
			})(i);
		  }
	});

	/**
	 * Ensure that all of the node details have been read from the gradle file before allowing the 
	 * user to run the extensions for the Vault Query view and the Flow view.
	 */
	// let cordaShowVaultQuery = vscode.commands.registerCommand('extension.cordaShowVaultQuery', () =>{
	// 	vscode.window.setStatusBarMessage('Displaying Corda Vault Query View', 5000);
	// 	var viewIsLaunched = false;
	// 	for (var i = 0; i < 10; i++) {
	// 		(function (i) {
	// 		  setTimeout(function () {
	// 			if(nodeLoaded){
	// 				if(!viewIsLaunched){
	// 					viewIsLaunched = true;
	// 					launchView(context, "vaultQuery");
	// 				}
	// 			}
	// 		  }, 3000*i);
	// 		})(i);
	// 	  }
	// });

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
	//context.subscriptions.push(cordaShowVaultQuery);
	context.subscriptions.push(cordaShowNodeExplorerView);
	context.subscriptions.push(cordaNoGradle);
	
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
			${loadScript(context,locationOfViews + 'index' + '.js') /* e.g /out/transactionExplorer.js */}
			
		</body>
		</html>
	`;

	webViewPanels.push(panel); // store panel in global
}

/**
 * launchViewBackend runs the server used by the views.
 */
function launchViewBackend() {

	// update cordapp dirs on nodes in node config
	for (var index in nodeConfig) {
		var name = nodeConfig[index].name.match("O=(.*),L")![1];
		if (winPlatform) {
			nodeConfig[index].cordappDir = nodeDir + "build\\nodes\\" + name + "\\cordapps";
		} else {
			nodeConfig[index].cordappDir = nodeDir + "build/nodes/" + name + "/cordapps";
		}
	}

	if (vscode.window.terminals.find((value) => {
		return value.name === "Client Launcher";
	}) === undefined) {
		clientTerminal = launchClient();
		console.log("Client Launch successful");
	} else {
		console.log("Client already up");
	}
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

	if(winPlatform){
		if(shellExecPath.includes("powershell")){
			cmd = "cd \"" + jarDir + "; java -jar explorer-server-0.1.0.jar"; 
		}else{
			cmd = "cd " + jarDir + " && java -jar explorer-server-0.1.0.jar";
		}
	}else{
		cmd = 'cd ' + jarDir + ' && java -jar explorer-server-0.1.0.jar';
	}
	
	let terminal = vscode.window.createTerminal("Client Launcher", shellExecPath, shellArgs);
	terminal.show(true);
	terminal.sendText(cmd);
	return terminal;
}

/**
 * 
 * @param name - name of the node being run
 * @param port - address that the RPCClient is listening to for connections
 * @param logPort - address that the RPCClient sends log data
 */
function runNode(name : string, port : string, logPort : string) {
	var shellArgs = [] as any;
	var cmd;

	//~TODO add jokila port to cmd string / function params
	if(winPlatform){
		if(shellExecPath.includes("powershell")){
			cmd = "cd \"" + nodeDir + "build\\nodes\\" + name + "\"; java -Dcapsule:jvm.args=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=" + port + "-javaagent:drivers/jolokia-jvm-1.6.0-agent.jar=port=" + logPort + ",logHandlerClass=net.corda.node.JolokiaSlf4jAdapter -Dname=" + name + " -jar \"" + nodeDir + "build\\nodes\\" + name + "\\corda.jar\"";
		}else{
			cmd = "cd " + nodeDir + "build\\nodes\\" + name + " && java -Dcapsule:jvm.args=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=" + port + "-javaagent:drivers/jolokia-jvm-1.6.0-agent.jar=port=" + logPort + ",logHandlerClass=net.corda.node.JolokiaSlf4jAdapter -Dname=" + name + " -jar \"" + nodeDir + "build\\nodes\\" + name + "\\corda.jar\"";
		}
	}else{
		cmd = 'cd ' + nodeDir + 'build/nodes/' + name + ' && java -Dcapsule.jvm.args=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=' + port + ' -javaagent:drivers/jolokia-jvm-1.6.0-agent.jar=port=' + logPort + ',logHandlerClass=net.corda.node.JolokiaSlf4jAdapter -Dname=' + name + ' -jar ' + nodeDir + 'build/nodes/' + name + '/corda.jar'; // ; exit
	}
	let terminal = vscode.window.createTerminal(name, shellExecPath, shellArgs);
	terminal.show(true);
	terminal.sendText(cmd);
	return terminal;
}

/**
 * checks if nodes are already deployed
 */
function areNodesDeployed() {
	const fs = require('fs');
	let path = nodeDir + 'build/nodes/';
	if (winPlatform) {
		path = nodeDir + 'build\\nodes\\';
	}
	return fs.existsSync(path);
}

/**
 * runNodes goes through the list of valid nodes collected from the gradle and runs them one by one.
 * Requires: deployNodes must have been run at least once - checked by presence of relative nodes directory!
 */
function runNodes() {
	//console.log("the node config");
	var port = 5005;
	var logPort = 7005;

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

		// dispose if terminals exist
		disposeRunningNodes();

		// push new terminals
		for(var index in nodeConfig){
			openTerminals.push(runNode(nodeConfig[index].name.match("O=(.*),L")![1], (port++).toString(), (logPort++).toString()));
		}
	}
}


function gradleRun(param : string) {
	//dispose any running terminals
	disposeRunningNodes();

	var cmd;
	
	if(winPlatform){
		if(shellExecPath.includes("powershell")){
			cmd = "cd \"" + projectCwd + "\" ; ./gradlew " + param;
		}else{
			cmd = "cd " + projectCwd + " && gradlew " + param;
		}
	}else{
		cmd = 'cd ' + projectCwd + ' && ./gradlew ' + param;
	}
	if (gradleTerminal === null) {
		var shellArgs = [] as any;
		vscode.workspace.getConfiguration().get('terminal');
		gradleTerminal = vscode.window.createTerminal('Gradle', shellExecPath, shellArgs);
	}
	gradleTerminal.show(true);
	gradleTerminal.sendText(cmd);	
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
		}
	});
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

function disposeRunningNodes(){
	if (clientTerminal !== null) { // remove client terminal
		clientTerminal.dispose();
		clientTerminal = null;
	}
	for (var j = 0; j < openTerminals.length; j++) { // remove all running node terminals
		openTerminals[j].dispose();
		openTerminals[j] = null;
	}
	openTerminals = [] as any;
	for (var i = 0; i < webViewPanels.length; i++) { // close open webview panels
		webViewPanels[i].dispose();
		webViewPanels[i] = null;
	}
	webViewPanels = [] as any;
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
