

import { Page, Locator } from '@playwright/test'; 
export class AddEmployee { 
//Variable Declaration
  readonly page: Page; 
  readonly pimBtn: Locator;
  readonly addEmpBtn: Locator;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly ID: Locator;
  readonly saveBtn: Locator;


//Constructor
  
  constructor(page: Page) { 
    this.page = page; 
    this.pimBtn = page.getByRole('link', { name: 'PIM' });
    this.addEmpBtn = page.locator(".oxd-icon.bi-plus.oxd-button-icon");
    this.firstName = page.getByPlaceholder('First Name');
    this.middleName = page.getByPlaceholder('Middle Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.ID = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
    this.saveBtn = page.getByText('Save');

  } 

//Actions

    async addEmp(firstname: string, middlename: string, lastname: string, id: string) { 
    await this.pimBtn.click(); 
    await this.addEmpBtn.click();
    await this.firstName.fill(firstname);
    await this.middleName.fill(middlename);
    await this.lastName.fill(lastname);
    //await this.ID.clear();
    await this.ID.fill(id);
    await this.saveBtn.click();


  } 
}  