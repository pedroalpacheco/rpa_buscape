const puppeteer = require('puppeteer');
const fs = require('fs');

const timestamp = new Date().getTime();

async function rpaMod(url, relatorio) {
  
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
    
    await page.screenshot({ path: `Relatorio-${relatorio}-${timestamp}.png`, fullPage: true })
    //await page.pdf({ path: `Relatorio-${relatorio}-${timestamp}.pdf`, format: 'a4' });
    //await console.log(`${diretorio}Relatorios criados: Relatorio-${relatorio}-${timestamp}.png / ${diretorio}Relatorio-${relatorio}-${timestamp}.pdf`)

    await browser.close();

};


module.exports = rpaMod;