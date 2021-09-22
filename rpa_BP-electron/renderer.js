const { ipcRenderer } = require('electron');

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault()
    
    //Processador;
    let prosi3 = document.querySelector(".form-check-inputi3").checked
    let prosi5 = document.querySelector(".form-check-inputi5").checked;
    let prosi7 = document.querySelector(".form-check-inputi7").checked;
    
    //SO
    let osLinux = document.querySelector(".form-check-inputOSLinux").checked;
    let osWindez = document.querySelector(".form-check-inputOSWindows").checked;

    ipcRenderer.send('canal1', [prosi3, prosi5, prosi7, osLinux, osWindez])

});

ipcRenderer.on('resultado', (event, item) => {
    const myNotification = new Notification('ALERTA', {
        body: `${item}`
    })
});
