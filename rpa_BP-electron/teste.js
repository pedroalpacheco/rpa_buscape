let valores = [true, true, false, false, false];
let urlAlvo = [];

if (valores[0] === true) {
    urlAlvo.push('processador-intel-core-i3/')
}
if (valores[1] === true) {
    urlAlvo.push('processador-intel-core-i5/')
}
if (valores[2] === true) {
    urlAlvo.push('processador-intel-core-i7/')
}
if (valores[3] === true) {
    urlAlvo.push('sistema-operacional-linux/')
}
if (valores[4] === true) {
    urlAlvo.push('windows-10/')
}

console.log(urlAlvo)
