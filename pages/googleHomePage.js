//imports
const {By, Key, Builder, until} = require('selenium-webdriver') // this are the "imported modules" from selenium- webdriver library
var BasePage = require("..\\pages\\basePage")
let Locators = require("..\\config\\locators")

class GoogleHomePage extends BasePage {
    google_search_bar = "//input[@name='q']"
    enter_search(text){
        super.sendKeys(Locators.google_search_bar, text)
        super.sendKeys(Locators.google_search_bar, Key.ENTER)
    }
}

module.exports = new GoogleHomePage()