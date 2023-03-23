
//imports
const {By, Key, Builder, until} = require('selenium-webdriver')
var webdriver = require('selenium-webdriver')
require('chromedriver')
const GoogleHomePage = require('..\\pages\\googleHomePage')

describe("Testing Google search bar functionality", function(){
    this.timeout(50000)
    let driver
    beforeEach(async function(){
        //init driver
        driver = await new Builder().forBrowser('chrome').build()
        
    })
    this.afterEach(async function(){
        //tear down   
         driver.quit()  
    })
    var parametrized = ["hola", "chau"] 
   // parametrized.forEach(function(text){
    for (const text of parametrized){
        it("POM TEST", async function(){
            console.log("test started")
            //var text= "hola"
            var googleHomePage = new GoogleHomePage(driver)
            googleHomePage.getUrl('https://www.google.com')
            googleHomePage.enter_search(text)
            await driver.wait(until.titleContains(text), 1000)
            console.log("content searched correctly.")
            await googleHomePage.getTitle().then(function(title){
                if(title.includes(text)){
                    console.log("The title is the expected.")
                }
                else{
                    console.log("The title is not the expected.")
                }
            })
            console.log("test finished.")
        })
    }
})

// //IMPORTS
// const {By, Key, Builder} = require('selenium-webdriver') // this are the "imported modules" from selenium- webdriver library
// require('chromedriver')

// async function test_google_search() {
//     let driver = await new Builder().forBrowser('chrome').build()
//     await driver.get('https://www.google.com')
//     await driver.findElement(By.xpath("//input[@name='q']")).sendKeys('cat', Key.ENTER)
//     setInterval(function(){ //IMPLICIT WAIT (always 5 seconds (5000 ms))
//         driver.quit(),
//         5000
//     })
// }   

// test_google_search()