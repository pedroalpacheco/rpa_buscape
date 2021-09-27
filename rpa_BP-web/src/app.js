const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sanitizar = require('./sanitizar');
const rpaMod = require('./rpaMod');

const port = 3006

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const urlOrigin = "https://www.buscape.com.br/pc-computador/";

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/rpa', (req, res) => {
    //const i3 = req.body.i3x ? true : false
    const i3 = req.body.i3x
    const i5 = req.body.i5x
    const i7 = req.body.i7x
    const linux = req.body.linux
    const windows = req.body.windows

    const componentes = [i3, i5, i7, linux, windows]
    let urlAlvo = [];

    if (componentes[0] === '') {
        urlAlvo.push('processador-intel-core-i3/')
    }
    if (componentes[1] === '') {
        urlAlvo.push('processador-intel-core-i5/')
    }
    if (componentes[2] === '') {
        urlAlvo.push('processador-intel-core-i7/')
    }
    if (componentes[3] === '') {
        urlAlvo.push('sistema-operacional-linux/')
    }
    if (componentes[4] === '') {
        urlAlvo.push('windows-10/')
    }
    const urlSanitizada = sanitizar.url(JSON.stringify(urlAlvo));
    const urlFinal = urlOrigin + urlSanitizada
    const relatorio = sanitizar.relatorio(urlSanitizada);
    rpaMod(urlFinal, relatorio);

    //console.log(urlFinal);
    res.send('Relatorio : ' +urlFinal )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})