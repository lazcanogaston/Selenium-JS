
//imports
const {By, Key, Builder, until} = require('selenium-webdriver')
require('chromedriver')
const googleHomePage = require('..\\pages\\googleHomePage') //it returns the INSTANCE of google home page (I declare it in the googleHomePage last line)


describe("Testing Google search bar functionality", function(){
    this.timeout(50000)
    beforeEach(function(){
        //init driver
        //let driver = new Builder().forBrowser('chrome').build()
    })
    this.afterEach(function(){
        //tear down
        setInterval(function(){  ///IMPLICIT WAIT (always 5 seconds (5000 ms))
            driver.quit(), 5000
        })
    })
    it("POM TEST", async function(){
        console.log("test started")
        var text= "hola"
        googleHomePage.getUrl('https://www.google.com')
        googleHomePage.enter_search(text)
        await driver.wait(until.titleIs(text), 1000)
        console.log("content searched correctly.")
        await googleHomePage.getTitle().then(function(title){
            if(title.includes('hola')){
                console.log("The title is the expected.")
            }
            else{
                console.log("The title is not the expected.")
            }
        })
        console.log("test finished.")
    })
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