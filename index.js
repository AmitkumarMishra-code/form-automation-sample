const puppeteer = require('puppeteer-core');

(async() => {
    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    await page.goto('https://quirky-visvesvaraya-1d2436.netlify.app/');

    await page.type('input[name=mainHeading]', 'Amazon Great Indian Sale');
    await page.type('input[name=secondHeading]', 'Visit www.amazon.co.in');
    await page.type('input[name=subtext]', 'Huge Discounts Available');
    await page.type('input[name=buttonText]', 'Browse Now!');
    await page.type('input[name=promoEnd]', '11-10-2021');
    await page.keyboard.press('ArrowRight');
    await page.type('input[name=promoEnd]', '23:59');
    
    await page.click('input[type=radio][value="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80"]')
    
    await page.click('button[type=submit]')

    await page.setViewport({width: 1940, height: 800});
    
    setTimeout(async() => {
        await page.screenshot({ path: 'example.png' });
        await browser.close();
    },1000)
    
})();