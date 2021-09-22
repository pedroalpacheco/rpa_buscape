const { app, BrowserWindow, ipcMain } = require('electron');
const sanitizar = require('./sanitizar');

const urlOrigin = "https://www.buscape.com.br/pc-computador/";

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
    //mainWindow.webContents.openDevTools()
};
ipcMain.on('canal1', (e, args) => {

    if (!args) {
        console.log('Vazio!');
        const item = 'Favor clicar item de PESQUISA!'
        //mainWindow.webContents.send('resultado', item);
    } else {
        //consultaml(args);
        //console.log(args)
        let urlAlvo = [];

        if (args[0] === true) {
            urlAlvo.push('processador-intel-core-i3/')
        }
        if (args[1] === true) {
            urlAlvo.push('processador-intel-core-i5/')
        }
        if (args[2] === true) {
            urlAlvo.push('processador-intel-core-i7/')
        }
        if (args[3] === true) {
            urlAlvo.push('sistema-operacional-linux/')
        }
        if (args[4] === true) {
            urlAlvo.push('windows-10/')
        }
        const urlSanitizada = sanitizar(JSON.stringify(urlAlvo));
        console.log(`${urlOrigin}${urlSanitizada}`)
    }
});

app.on('ready', () => {
    createWindow()
})