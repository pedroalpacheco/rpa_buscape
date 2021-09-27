const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3006

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
    console.log(`
    i3:${i3}
    i5:${i5}
    i7:${i7}
    Linux:${linux}
    windows:${windows}
    `)
    res.send('FORMULARIO RECEBIDO!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})