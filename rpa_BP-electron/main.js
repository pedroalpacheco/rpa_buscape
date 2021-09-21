const { app, BrowserWindow} = require('electron');


function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    mainWindow.removeMenu();

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()
};


app.on('ready', () => {
    createWindow()
})