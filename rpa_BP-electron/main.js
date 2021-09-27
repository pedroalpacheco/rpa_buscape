const { app, BrowserWindow, ipcMain} = require('electron');
const sanitizar = require('./sanitizar');
const rpaMod = require('./rpaMod');

const urlOrigin = "https://www.buscape.com.br/pc-computador/";

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 625,
        resizable: false,
        icon:'./image/buscapc40.png',
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
    const argsFalso = [false, false, false, false, false];

    if (args===argsFalso) {
        console.log('Vazio!');
        const item = 'Favor clicar item de PESQUISA!'
        //mainWindow.webContents.send('resultado', item);
    } else {
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
        const urlSanitizada = sanitizar.url(JSON.stringify(urlAlvo));
        const urlFinal = urlOrigin + urlSanitizada

        if (urlFinal === urlOrigin) {
            const item = 'Favor CLICAR em algum item de PESQUISA!'
            mainWindow.webContents.send('resultado', item);
        } else {
            const relatorio = sanitizar.relatorio(urlSanitizada);
            rpaMod(urlFinal, relatorio);
            
         }

    }
});

app.on('ready', () => {
    createWindow()
})