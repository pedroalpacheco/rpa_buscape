const puppeteer = require('puppeteer');
const fs = require('fs');

//const timestamp = new Date().getTime();

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
    
    await page.pdf({ path: `${relatorio}.pdf`, format: 'a4' });
    
    await browser.close();

};


module.exports = rpaMod;