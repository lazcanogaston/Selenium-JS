//imports
const {By, Key, Builder, until} = require('selenium-webdriver') // this are the "imported modules" from selenium- webdriver library
var BasePage = require("..\\pages\\basePage")
let Locators = require("..\\config\\locators")

class GoogleHomePage extends BasePage {
    constructor(driver){
        super(driver)
        this.google_search_bar = "//input[@name='q']"
    }
    
    async enter_search(text){
        console.log(text)
        var search_bar = this.findElement(this.google_search_bar);
        await this.driver.wait(until.elementIsVisible(search_bar));
        this.sendKeys(this.google_search_bar, text)
        this.sendKeys(this.google_search_bar, Key.ENTER)
    }
}

module.exports = GoogleHomePage