const puppeteer = require('puppeteer');

const searchGoogle = async (searchQuery) => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(`https://google.com/search?q=${searchQuery}`);

    await page.screenshot({path: 'example.png'});

    await browser.close();
};

module.exports = searchGoogle;
