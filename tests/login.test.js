const { Builder } = require('selenium-webdriver');
const LoginPage = require('../pages/LoginPage');

async function executarTeste() {

    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {

        const loginPage = new LoginPage(driver);
        await loginPage.acessar();
        await loginPage.login('fulano@email.com','teste');

        await driver.sleep(3000);

        console.log('Fluxo executado com sucesso');

    } catch (erro) {

        console.error(erro);

    } finally {

        await driver.quit();
    }
}

executarTeste();