import { Page, Locator } from '@playwright/test';
import { LoginPage } from './LoginPage';


export class LogoutPage {
    //Declare Vasriables
    readonly page: Page;
    private readonly dropdownbtn: Locator;
    private readonly lnkLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownbtn = page.locator(".oxd-userdropdown-name");
        this.lnkLogout = page.locator(".oxd-userdropdown-link:has-text('Logout')");
    }

    //Actions

    async Logout(): Promise<LoginPage> {
        await this.dropdownbtn.click();
        await this.lnkLogout.click();
        return new LoginPage(this.page);
    }

}