//imports
const {By, Key, Builder} = require('selenium-webdriver') // this are the "imported modules" from selenium- webdriver library
var webdriver = require('selenium-webdriver')
require('chromedriver')
//global variable
//var driver = new webdriver.Builder().forBrowser('chrome').build()



class BasePage{
    constructor(driver){
        this.driver = driver //it is not necessary to pass the driver instance as a parameter because it is globally initialized in line 6
        this.driver.manage().setTimeouts( { implicit: 15000 } );
    }
    getUrl(url){
        this.driver.get(url)
    }
    findElement(locator){
        //console.log("find element passed")
        return this.driver.findElement(By.xpath(locator))
    }

    sendKeys(locator, text){
        this.findElement(locator).sendKeys(text)
        console.log("send keys passed")
    }

    getTitle(){
        return this.driver.getTitle()
    }
}

module.exports = BasePage 