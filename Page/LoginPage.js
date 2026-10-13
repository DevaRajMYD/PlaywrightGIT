export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.login = page.locator("//input[@id='login']");
    }

    async launchBaseURL() {
        await this.page.goto("https://adactinhotelapp.com/");
        
    }

    async enterUserName(uName) {
        await this.username.fill(uName);
    }

    async enterPassword(pWord) {
        await this.password.fill(pWord);
    }

    async clickLoginButton() {
        await this.login.click();
    }
}