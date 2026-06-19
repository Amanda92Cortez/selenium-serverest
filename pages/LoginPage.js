const { By, until } = require("selenium-webdriver");

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async acessar() {
    await this.driver.get("https://front.serverest.dev/login");
  }

  async preencherEmail(email) {
    const campo = await this.driver.wait(
      until.elementLocated(By.css('input[type="email"]')),
      10000,
    );

    await campo.sendKeys(email);
  }

  async preencherSenha(senha) {
    const campo = await this.driver.findElement(
      By.css('input[type="password"]'),
    );

    await campo.sendKeys(senha);
  }

  async clicarEntrar() {
    const botao = await this.driver.findElement(
      By.css('button[type="submit"]'),
    );
    await botao.click();
  }

  async login(email, senha) {
    await this.preencherEmail(email);
    await this.preencherSenha(senha);
    await this.clicarEntrar();
  }
}

module.exports = LoginPage;
