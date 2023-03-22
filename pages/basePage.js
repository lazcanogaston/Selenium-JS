//imports
const {By, Key, Builder} = require('selenium-webdriver') // this are the "imported modules" from selenium- webdriver library
var webdriver = require('selenium-webdriver')
require('chromedriver')
//global variable
var driver = new webdriver.Builder().forBrowser('chrome').build()

//implicit wait
driver.manage().setTimeouts({implicit: (10000)})

class BasePage{
    constructor(){
        global.driver = driver //it is not necessary to pass the driver instance as a parameter because it is globally initialized in line 6
    }
    getUrl(url){
        driver.get(url)
    }
    findElement(locator){
        console.log("find element passed")
        return driver.findElement(By.xpath, locator)
    }

    sendKeys(locator, text){
        this.findElement(locator).sendKeys(text)
        console.log("send keys passed")
    }

    getTitle(){
        return driver.getTitle()
    }
}

module.exports = BasePage 