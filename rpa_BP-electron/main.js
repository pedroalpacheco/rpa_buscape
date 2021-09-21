const { app, BrowserWindow} = require('electron');


function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            nativeWindowOpen:true
        },
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    mainWindow.removeMenu();

    // Abre o DevTools.
    mainWindow.webContents.openDevTools()
};


app.on('ready', () => {
    createWindow()
})