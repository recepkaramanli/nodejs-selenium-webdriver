const webdriver = require('selenium-webdriver')
const express = require('express');
const app = express();
const path = require('path')

// Serve static files from the React app. 
app.use(express.static(path.join(__dirname, '..', 'client/build')));



async function sayfaac(url) {
  
  require('chromedriver');
  let options = new chrome.Options();
  let serviceBuilder = new chrome.ServiceBuilder(process.env.CHROME_DRIVER_PATH);

    //Don't forget to add these for heroku
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

sayfaac()
