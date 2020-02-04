// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

let serverProcess;
let baseUrl;

const JAR = 'serveexplorer-websocket-server-0.1.0.jar'

function startServer(port) {
  //logger.info(`Starting server at port ${port}`)

  const server = `${path.join(app.getAppPath(), "src/server.sh")}`;
  console.log("Starting Sever" + server);
  serverProcess = require('child_process')
    .spawn('src/server.sh');

    serverProcess.stdout.on('data', function (data) {``
      console.log('Server: ' + data);
    });

  if (serverProcess.pid) {
    console.log(serverProcess.pid)
  } else {
    console.log("Error");
    //logger.error("Failed to launch server process.")
  }
}

// function stopServer() {
//   logger.info('Stopping server...')
//   axios.post(`${baseUrl}/actuator/shutdown`, null, {
//     headers: {'Content-Type': 'application/json'}
//   })
//     .then(() => logger.info('Server stopped'))
//     .catch(error => {
//       logger.error('Failed to stop the server gracefully.', error)
//       if (serverProcess) {
//         logger.info(`Killing server process ${serverProcess.pid}`);
//         const kill = require('tree-kill');
//         kill(serverProcess.pid, 'SIGTERM', function (err) {
//           logger.info('Server process killed');
//           serverProcess = null;
//           baseUrl = null;
//           app.quit(); // quit again
//         });
//       }
//     })
//     .finally(() => {
//       serverProcess = null;
//       baseUrl = null;
//       app.quit(); // quit again
//     })
// }

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.maximize();

  const startUrl = url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  // and load the index.html of the app.
  //mainWindow.loadURL(startUrl);
  mainWindow.loadURL('http://localhost:3000');

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
  startServer(8080);
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
