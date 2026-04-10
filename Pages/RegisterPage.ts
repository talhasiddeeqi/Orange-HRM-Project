import { Page, Locator } from '@playwright/test'; 

export class RegisterPage { 
//Variable Declaration
  readonly page: Page; 
  readonly accountBtn: Locator;
  readonly registerLink: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly eMail: Locator;
  readonly passWord: Locator;
  readonly privacypolicyBtn: Locator;
  readonly continueBtn: Locator;



//Constructor
  
  constructor(page: Page) { 
    this.page = page; 
    this.accountBtn = page.locator("span:has-text('My Account')");
    this.registerLink = page.locator("page.getByRole('link', { name: 'Register' })");
    this.firstName = page.locator("page.getByRole('textbox', { name: 'First Name' })");
    this.lastName = page.locator("page.getByRole('textbox', { name: 'Last Name' })");
    this.eMail = page.locator("page.getByRole('textbox', { name: 'E-Mail' })");
    this.passWord = page.locator("page.getByLabel('Password')");
    this.privacypolicyBtn = page.locator("readonly passWord: Locator;");
    this.continueBtn = page.locator("page.getByText('Continue')");


  } 

//Actions
  
  async goto() { 
    await this.page.goto('https://demo.opencart.com/'); 
  } 
  
  async register(firstname: string, lastname: string, email: string, password: string) { 
    await this.accountBtn.click();
    await this.registerLink.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(firstname);
    await this.eMail.fill(firstname);
    await this.passWord.fill(firstname);
    await this.privacypolicyBtn.click();
    await this.continueBtn.click();


  } 


}  