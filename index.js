
const puppeteer = require('puppeteer');

const siteAlvo = 'https://www.buscape.com.br/pc-computador';

const timestamp = new Date().getTime();


(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto(siteAlvo, {waitUntil:'networkidle2'});
    await page.waitForSelector('.button-filter');
    await page.click('.button-filter');
    await page.waitForSelector('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__Content__1Johw > aside > div:nth-child(5) > ul > li:nth-child(3) > a > div > div > span.ais-RefinementList-label');
    await page.click('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__Content__1Johw > aside > div:nth-child(5) > ul > li:nth-child(3) > a > div > div > span.ais-RefinementList-label');
    await page.waitForSelector('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__Content__1Johw > aside > div:nth-child(4) > ul > li:nth-child(1) > a > div > div > span.Checkbox_CheckMark__1qvZ9.ais-RefinementList-checkbox');
    await page.click('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__Content__1Johw > aside > div:nth-child(4) > ul > li:nth-child(1) > a > div > div > span.Checkbox_CheckMark__1qvZ9.ais-RefinementList-checkbox');
    
    //Botao concordo
    await page.waitForSelector('#__next > div.PrivacyPolicy-styles_floating__1bgd2 > div > div > div.PrivacyPolicy-styles_buttonCell__3GgYk.col-lg-2 > button');
    await page.click('#__next > div.PrivacyPolicy-styles_floating__1bgd2 > div > div > div.PrivacyPolicy-styles_buttonCell__3GgYk.col-lg-2 > button');
    
    await page.waitForSelector('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__FilterButtonContainer__3L9LR > button');
    await page.click('#__next > div.SearchPage_SearchPageContainer__xpPgJ.container-lg > div > div.Filters_Filters__3C2Tt.Filters_visible__1o3ra.col-xl-3.col-lg-3 > div.Filters_Filters__FilterButtonContainer__3L9LR > button');

    await page.waitForTimeout('5000')
    await page.evaluate(() => {
        window.scrollBy(0, 5000);
    });
    await page.waitForTimeout('35000')
    await page.screenshot({ path: `Relatorio-${timestamp}.png`, fullPage: true })
    /*await page.pdf({ path: `Relatorio-${timestamp}.pdf`, format: 'a4' });
    await console.log(`Relatorios criados: Relatorio-${timestamp}.png / Relatorio-${timestamp}.pdf`)*/


   // await browser.close();
})();