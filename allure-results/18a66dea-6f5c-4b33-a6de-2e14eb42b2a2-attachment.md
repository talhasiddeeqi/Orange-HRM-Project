# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_PIM.spec.ts >> PIMTest
- Location: tests\Test_PIM.spec.ts:51:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'yyyy-dd-mm' }).first()
    - waiting for" https://opensource-demo.orangehrmlive.com/web/pim/viewPersonalDetails/empNumber/288" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/pim/viewPersonalDetails/empNumber/288"
    - locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-a6dfc6a9="" class="oxd-loading-spinner"></div> from <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div data-v-a6dfc6a9="" class="oxd-loading-spinner"></div> from <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-a6dfc6a9="" class="oxd-loading-spinner"></div> from <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for" https://opensource-demo.orangehrmlive.com/web/auth/logout" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/auth/login"
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1   | 
  2   | 
  3   | import { th } from '@faker-js/faker';
  4   | import { Page, Locator } from '@playwright/test'; 
  5   | export class AddEmployee { 
  6   | //Variable Declaration
  7   |   readonly page: Page; 
  8   |   readonly pimBtn: Locator;
  9   |   readonly addEmpBtn: Locator;
  10  |   readonly firstName: Locator;
  11  |   readonly middleName: Locator;
  12  |   readonly lastName: Locator;
  13  |   readonly ID: Locator;
  14  |   readonly saveBtn: Locator;
  15  |   readonly searchIDBox: Locator;
  16  |   readonly searchBtn: Locator;  
  17  | 
  18  |   readonly DLNum: Locator;
  19  |   readonly LiscenceExpDate: Locator;
  20  |   readonly nationality: Locator;
  21  |   readonly maritalStatus: Locator
  22  |   readonly DOB: Locator;
  23  |   readonly genderM: Locator;
  24  |   readonly genderF: Locator;
  25  |   readonly save1Btn: Locator;
  26  | 
  27  |   readonly bloodType: Locator;
  28  |   readonly save2Btn: Locator;
  29  | 
  30  |   readonly attachmentBtn: Locator;
  31  |   readonly fileUploadInput: Locator;
  32  |   readonly commentInput: Locator
  33  |   readonly save3Btn: Locator;
  34  |   
  35  | 
  36  | 
  37  | //Constructor
  38  |   
  39  |   constructor(page: Page) { 
  40  |     this.page = page; 
  41  |     this.pimBtn = page.getByRole('link', { name: 'PIM' });
  42  |     this.addEmpBtn = page.locator(".oxd-icon.bi-plus.oxd-button-icon");
  43  |     this.firstName = page.getByPlaceholder('First Name');
  44  |     this.middleName = page.getByPlaceholder('Middle Name');
  45  |     this.lastName = page.getByPlaceholder('Last Name');
  46  |     this.ID = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
  47  |     this.saveBtn = page.getByText('Save');
  48  |     this.searchIDBox = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
  49  |     this.searchBtn = page.getByText('Search');
  50  | 
  51  |     this.DLNum = page.getByRole('textbox').nth(7);
  52  |     this.LiscenceExpDate = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
  53  |     this.nationality = page.locator(':text("-- Select --")').nth(0);
  54  |     this.maritalStatus = page.locator(':text("-- Select --")').nth(1);
  55  |     this.DOB = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).last();
  56  |     this.genderM = page.getByLabel('Male');
  57  |     this.genderF = page.getByLabel('Female');
  58  |     this.save1Btn = page.getByRole('button', { name: 'Save' }).nth(0);
  59  | 
  60  |     this.bloodType = page.locator(':text("-- Select --")').nth(2);
  61  |     this.save2Btn = page.getByRole('button', { name: 'Save' }).nth(1);
  62  | 
  63  |     this.attachmentBtn = page.locator('i.oxd-icon.bi-plus.oxd-button-icon');
  64  |     this.fileUploadInput = page.getByText('Browse');
  65  |     this.commentInput = page.getByRole('textbox', { name: 'Type comment here' });
  66  |     this.save3Btn = page.getByRole('button', { name: 'Save' }).nth(2);
  67  | 
  68  | 
  69  | 
  70  |   } 
  71  | 
  72  | //Actions
  73  | 
  74  |     async addEmp(firstname: string, middlename: string, lastname: string, id: string) { 
  75  |     await this.pimBtn.click(); 
  76  |     await this.addEmpBtn.click();
  77  |     await this.firstName.fill(firstname);
  78  |     await this.middleName.fill(middlename);
  79  |     await this.lastName.fill(lastname);
  80  |     //await this.ID.clear();
  81  |     await this.ID.fill(id);
  82  |     await this.saveBtn.click();
  83  | 
  84  |     await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure the employee is added before searching
  85  | 
  86  |     //this.DLNum.fill('DL123456');
> 87  |     this.LiscenceExpDate.click();
      |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  88  |     this.LiscenceExpDate.fill('2026-15-12');
  89  |     this.page.waitForTimeout(2000); // Wait for 2 seconds before selecting
  90  |     this.nationality.click();
  91  |     await this.page.getByText('Djibouti').click();
  92  |     this.maritalStatus.click();
  93  |     await this.page.getByRole('option', { name: 'Single' }).click();
  94  |     this.DOB.click();
  95  |     this.DOB.fill('2000-10-10');
  96  |     this.genderM.check();
  97  |     this.save1Btn.click();  
  98  | 
  99  |     this.bloodType.click();
  100 |     await this.page.getByRole('option', { name: 'O+' }).click();
  101 |     this.save2Btn.click();  
  102 |       
  103 |     this.attachmentBtn.click();
  104 |     await this.fileUploadInput.setInputFiles('utils/attachmentFile.jpg');  
  105 |     await this.commentInput.fill('Picture has been uploaded');
  106 |     await console.log('File uploaded successfully');
  107 |     await this.save3Btn.click();
  108 | 
  109 |     }
  110 | 
  111 | 
  112 |   async searchEmp(empName: string) {
  113 |     await this.searchIDBox.fill(empName);
  114 |     await this.searchBtn.click();
  115 |   }
  116 | }  
```