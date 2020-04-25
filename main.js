const webdriver = require('selenium-webdriver');

async function sayfaac(url) {

  let driver =  await new webdriver.Builder().forBrowser('firefox').build();
  await driver.get('https://www.sahibinden.com/')
  driver.getPageSource()
  .then(function(src) {
    console.log(src)
  })
  driver.quit()
}

sayfaac()