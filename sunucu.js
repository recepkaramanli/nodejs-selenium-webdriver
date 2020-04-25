var express = require('express')
var app = express()
const webdriver = require('selenium-webdriver')

app.get('/', async function (req, res) {

  let buff = new Buffer(req.params.data, 'base64')
  let text = buff.toString('ascii')

  let driver = await new webdriver.Builder().forBrowser('chrome').build();
  await driver.get('https://www.recepkaramanli.com')
  await driver.getPageSource()
    .then(function (src) {
      res.send(src)
    })
  driver.quit()

})

var server = app.listen(7777, function () {
  console.log('sunucu calisiyor');
})
