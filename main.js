const webdriver = require('selenium-webdriver')
const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'client/build')));

async function sayfaac(url) {
  
  require('chromedriver');
  let options = new chrome.Options();
  let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

  options.addArguments("--headless");
  options.addArguments("--disable-gpu");
  options.addArguments("--no-sandbox");

  let driver =  await new webdriver.Builder().
  forBrowser('chrome').
  setChromeOptions(options).
  setChromeService(serviceBuilder).
  build();
  await driver.get('https://www.sahibinden.com/')
  driver.getPageSource()
  .then(function(src) {
    console.log(src)
  })
  driver.quit()
}

await sayfaac()
