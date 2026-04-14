# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_EndtoEnd.spec.ts >> EndtoEnd Test
- Location: tests\Test_EndtoEnd.spec.ts:51:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator(':text-is("PIM")') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">PIM</span> aka getByRole('link', { name: 'PIM' })
    2) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">PIM</h6> aka getByRole('heading', { name: 'PIM' })

Call log:
  - waiting for locator(':text-is("PIM")')

```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Search')
    - waiting for" https://opensource-demo.orangehrmlive.com/web/auth/login" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/auth/login"

```

# Test source

```ts
  1  | 
  2  | 
  3  | import { Page, Locator } from '@playwright/test'; 
  4  | export class AddEmployee { 
  5  | //Variable Declaration
  6  |   readonly page: Page; 
  7  |   readonly pimBtn: Locator;
  8  |   readonly addEmpBtn: Locator;
  9  |   readonly firstName: Locator;
  10 |   readonly middleName: Locator;
  11 |   readonly lastName: Locator;
  12 |   readonly ID: Locator;
  13 |   readonly saveBtn: Locator;
  14 |   readonly searchIDBox: Locator;
  15 |   readonly searchBtn: Locator;  
  16 | 
  17 | 
  18 | //Constructor
  19 |   
  20 |   constructor(page: Page) { 
  21 |     this.page = page; 
  22 |     this.pimBtn = page.getByRole('link', { name: 'PIM' });
  23 |     this.addEmpBtn = page.locator(".oxd-icon.bi-plus.oxd-button-icon");
  24 |     this.firstName = page.getByPlaceholder('First Name');
  25 |     this.middleName = page.getByPlaceholder('Middle Name');
  26 |     this.lastName = page.getByPlaceholder('Last Name');
  27 |     this.ID = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
  28 |     this.saveBtn = page.getByText('Save');
  29 |     this.searchIDBox = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
  30 |     this.searchBtn = page.getByText('Search');
  31 |     
  32 | 
  33 |   } 
  34 | 
  35 | //Actions
  36 | 
  37 |     async addEmp(firstname: string, middlename: string, lastname: string, id: string) { 
  38 |     await this.pimBtn.click(); 
  39 |     await this.addEmpBtn.click();
  40 |     await this.firstName.fill(firstname);
  41 |     await this.middleName.fill(middlename);
  42 |     await this.lastName.fill(lastname);
  43 |     //await this.ID.clear();
  44 |     await this.ID.fill(id);
  45 |     await this.saveBtn.click();
  46 | 
  47 | 
  48 |   } 
  49 | 
  50 |   async searchEmp(empName: string) {
  51 |     await this.searchIDBox.fill(empName);
> 52 |     await this.searchBtn.click();
     |                          ^ Error: locator.click: Target page, context or browser has been closed
  53 |   }
  54 | }  
```