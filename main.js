const webdriver = require('selenium-webdriver')
chrome = require('selenium-webdriver/chrome')

options = new chrome.Options();
options.addArguments('headless');
options.addArguments('disable-gpu');
options.addArguments('--no-sandbox');
options.addArguments('--remote-debugging-port=9222');
options.addArguments('--user-data-dir=chrome-data');

async function sayfaac() {
    let driver = await new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
    //await driver.get('https://www.sahibinden.com/ilan/ikinci-el-ve-sifir-alisveris-bilgisayar-dizustu-no$
    //await driver.get('https://www.recepkaramanli.com/fiyat-takip/islemtest.php');
    await driver.get('https://www.recepkaramanli.com/fiyat-takip');
    await driver.getTitle().then(function(title) { console.log(title); })
    //await driver.getPageSource().then(function (src) { console.log(src); });
}

sayfaac();
