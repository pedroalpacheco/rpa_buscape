const { ipcRenderer } = require('electron');

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault()
    //const form = document.getElementById("formulario");
    
    //Processador;
    let prosi3 = document.querySelector(".form-check-inputi3").checked
    let prosi5 = document.querySelector(".form-check-inputi5").checked;
    let prosi7 = document.querySelector(".form-check-inputi7").checked;
    
    //SO
    let osLinux = document.querySelector(".form-check-inputOSLinux").checked;
    let osWindez = document.querySelector(".form-check-inputOSWindows").checked;
    
        console.log(`
            Processador i3:${prosi3}
            Processador i5:${prosi5}
            Processador i7:${prosi7}
            Processador LINUX:${osLinux}
            Processador WIN10:${osWindez}
            
            `)
});
