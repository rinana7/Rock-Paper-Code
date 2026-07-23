const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 600,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    show: false, // Don't show until ready
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  // Force macOS to reveal the transparent window once loaded
  win.once('ready-to-show', () => {
    win.center();
    win.show();
  });
}

app.whenReady().then(createWindow);