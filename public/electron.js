// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

let serverProcess;

let jarFile = url.format({
  pathname: path.join(__dirname, '../../../explorer-server-0.1.0.jar'),
  //pathname: path.join(__dirname, '../explorer-server-0.1.0.jar'), // -- For local testing
  protocol: 'file:',
  slashes: true
});

if(process.platform === 'darwin' || process.platform === 'linux'){
  jarFile = jarFile.substring(7);
}else if(process.platform === 'win32'){
  jarFile = jarFile.substring(8);
}

function startServer(port) {
  serverProcess = require('child_process')
    //.spawn('java', ['-agentlib:jdwp=transport=dt_socket,address=8000,server=y,suspend=y', '-jar', jarFile.substring(7)]);
    .spawn('java', ['-jar', jarFile]);

    serverProcess.stdout.on('data', function (data) {
      console.log('Electron Server Log: ' + data);
    });

  if (serverProcess.pid) {
    console.log("Server Process Started, PID: "+ serverProcess.pid)
  } else {
    console.log("Failed to launch server process.")
  }
}

function stopServer() {
    if (serverProcess) {
          const kill = require('tree-kill');
          kill(serverProcess.pid, 'SIGTERM', function (err) {
            serverProcess = null;
            baseUrl = null;
            app.quit(); // quit again
          });
        }
  }

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);
  //mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  startServer(8580);
  createWindow();
  mainWindow.maximize();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
  stopServer();
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
  startServer();
  
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
