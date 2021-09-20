
const puppeteer = require('puppeteer');

const iCinco = 'processador-intel-core-i5/';
const iSete = 'processador-intel-core-i7/';
const gbdez = '10-gb-ou-mais/';
const winDez = 'windows-10/';
const linux = 'sistema-operacional-linux/';

const urlAlvo = "https://www.buscape.com.br/pc-computador/"+iCinco+winDez;



(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport:null
    });
    const page = await browser.newPage();

    await page.goto(urlAlvo);

    //await browser.close();
})();