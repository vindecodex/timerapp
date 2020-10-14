const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
