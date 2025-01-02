const { builder, by, key, until } = require('selenium-webdriver')

(async function example(){
    let driver = await new Builder().forBrowser('chrome').build()

    try{
        await driver.get('https://www.google.com')

        const searchBox = await driver.findElement(By.name('q'))
        await searchBox.sendKeys('Selenium', Key.RETURN)

        await driver.wait(until.titleContains('Selenium'),10000)
        alert("Página carregada com Sucesso!")
    } finally{
        await driver.quit()
    }
})();