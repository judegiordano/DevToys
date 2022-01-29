const { app, BrowserWindow } = require('electron')
const path = require('path')
const { shell } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    show: false,
    allowRunningInsecureContent: true,
    // backgroundColor: "#2f3136",

    // frame: false,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true,
    // titleBarOverlay: {
    //   color: '#2f3136',
    //   symbolColor: 'black'
    // },

    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL('http://localhost:3001/');
  mainWindow.removeMenu()
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
  })
  // mainWindow.webContents.on('new-window', (e, url) => {
  //   e.preventDefault();
  //   shell.openExternal(url);
  // });

  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
