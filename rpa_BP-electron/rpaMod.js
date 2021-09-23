const puppeteer = require('puppeteer');
const { app, shell } = require('electron');
const fs = require('fs');
const ProgressBar = require('electron-progressbar');

const timestamp = new Date().getTime();

const diretorio = app.getPath('documents') + '/RELATORIOS-BUSCAPE-PC/';

async function rpaMod(url, relatorio) {
    var progressBar = new ProgressBar({
        indeterminate: false,
        text: 'Preparando a consulta...',
        detail: 'Aguarde...'
    });
    progressBar
        .on('completed', function () {
            console.info(`completo...`);
            progressBar.detail = 'Tarefa completa. Saindo...';
        })
        .on('aborted', function () {
            console.info(`Fechando...`);
        })
        .on('progress', function (value) {
            progressBar.detail = `Value ${value} out of ${progressBar.getOptions().maxValue}...`;
        });

    const browser = await puppeteer.launch({
        //headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForTimeout('5000')
    await page.evaluate(() => {
        window.scrollBy(0, 15000);
    });
    await page.waitForTimeout('35000');
    if (!fs.existsSync(diretorio)) {
        fs.mkdirSync(diretorio);
    }
    await page.screenshot({ path: `${diretorio}Relatorio-${relatorio}-${timestamp}.png`, fullPage: true })
    await page.pdf({ path: `${diretorio}Relatorio-${relatorio}-${timestamp}.pdf`, format: 'a4' });
    //await console.log(`${diretorio}Relatorios criados: Relatorio-${relatorio}-${timestamp}.png / ${diretorio}Relatorio-${relatorio}-${timestamp}.pdf`)

    await browser.close();
    setTimeout(function () {
        if (!progressBar.isCompleted()) {
            progressBar.value += 1;
        }
        progressBar.setCompleted();
        shell.openPath(diretorio)
    }, 3000);
};


module.exports = rpaMod;