const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 450,
    frame: false,            // Removes the top title bar and close buttons
    transparent: true,       // Makes the background window invisible
    alwaysOnTop: true,       // Keeps it floating above other apps
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);