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
  - waiting for getByRole('option', { name: 'Indian' })
    - waiting for" https://opensource-demo.orangehrmlive.com/web/pim/viewPersonalDetails/empNumber/187" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/pim/viewPersonalDetails/empNumber/187"
    - waiting for" https://opensource-demo.orangehrmlive.com/web/auth/logout" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/auth/login"

```

# Test source

```ts
  1   | 
  2   | 
  3   | import { Page, Locator } from '@playwright/test'; 
  4   | export class AddEmployee { 
  5   | //Variable Declaration
  6   |   readonly page: Page; 
  7   |   readonly pimBtn: Locator;
  8   |   readonly addEmpBtn: Locator;
  9   |   readonly firstName: Locator;
  10  |   readonly middleName: Locator;
  11  |   readonly lastName: Locator;
  12  |   readonly ID: Locator;
  13  |   readonly saveBtn: Locator;
  14  |   readonly searchIDBox: Locator;
  15  |   readonly searchBtn: Locator;  
  16  | 
  17  |   readonly DLNum: Locator;
  18  |   readonly LiscenceExpDate: Locator;
  19  |   readonly nationality: Locator;
  20  |   readonly maritalStatus: Locator
  21  |   readonly DOB: Locator;
  22  |   readonly genderM: Locator;
  23  |   readonly genderF: Locator;
  24  |   readonly save1Btn: Locator;
  25  | 
  26  |   readonly bloodType: Locator;
  27  |   readonly save2Btn: Locator;
  28  | 
  29  |   readonly attachmentBtn: Locator;
  30  |   readonly fileUploadInput: Locator;
  31  |   readonly commentInput: Locator
  32  |   readonly save3Btn: Locator;
  33  |   
  34  | 
  35  | 
  36  | //Constructor
  37  |   
  38  |   constructor(page: Page) { 
  39  |     this.page = page; 
  40  |     this.pimBtn = page.getByRole('link', { name: 'PIM' });
  41  |     this.addEmpBtn = page.locator(".oxd-icon.bi-plus.oxd-button-icon");
  42  |     this.firstName = page.getByPlaceholder('First Name');
  43  |     this.middleName = page.getByPlaceholder('Middle Name');
  44  |     this.lastName = page.getByPlaceholder('Last Name');
  45  |     this.ID = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
  46  |     this.saveBtn = page.getByText('Save');
  47  |     this.searchIDBox = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
  48  |     this.searchBtn = page.getByText('Search');
  49  | 
  50  |     this.DLNum = page.getByRole('textbox').nth(7);
  51  |     this.LiscenceExpDate = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
  52  |     this.nationality = page.locator('div').filter({ hasText: '-- Select --' }).nth(0);
  53  |     this.maritalStatus = page.locator('div').filter({ hasText: '-- Select --' }).nth(1);
  54  |     this.DOB = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).last();
  55  |     this.genderM = page.getByLabel('Male');
  56  |     this.genderF = page.getByLabel('Female');
  57  |     this.save1Btn = page.getByRole('button', { name: 'Save' }).nth(0);
  58  | 
  59  |     this.bloodType = page.locator('div').filter({ hasText: '-- Select --' }).nth(2);
  60  |     this.save2Btn = page.getByRole('button', { name: 'Save' }).nth(1);
  61  | 
  62  |     this.attachmentBtn = page.locator('i.oxd-icon.bi-plus.oxd-button-icon');
  63  |     this.fileUploadInput = page.getByText('Browse');
  64  |     this.commentInput = page.getByRole('textbox', { name: 'Type comment here' });
  65  |     this.save3Btn = page.getByRole('button', { name: 'Save' }).nth(2);
  66  | 
  67  | 
  68  | 
  69  |   } 
  70  | 
  71  | //Actions
  72  | 
  73  |     async addEmp(firstname: string, middlename: string, lastname: string, id: string) { 
  74  |     await this.pimBtn.click(); 
  75  |     await this.addEmpBtn.click();
  76  |     await this.firstName.fill(firstname);
  77  |     await this.middleName.fill(middlename);
  78  |     await this.lastName.fill(lastname);
  79  |     //await this.ID.clear();
  80  |     await this.ID.fill(id);
  81  |     await this.saveBtn.click();
  82  | 
  83  |     await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure the employee is added before searching
  84  | 
  85  |     this.DLNum.fill('DL123456');
  86  |     this.LiscenceExpDate.fill('31-12-2026');
  87  |     this.nationality.click();
> 88  |     await this.page.getByRole('option', { name: 'Indian' }).click();
      |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  89  |     this.maritalStatus.click();
  90  |     await this.page.getByRole('option', { name: 'Single' }).click();
  91  |     this.DOB.fill('10-10-2000');
  92  |     this.genderM.check();
  93  |     this.save1Btn.click();  
  94  | 
  95  |     this.bloodType.click();
  96  |     await this.page.getByRole('option', { name: 'O+' }).click();
  97  |     this.save2Btn.click();  
  98  |       
  99  |     this.attachmentBtn.click();
  100 |     await this.fileUploadInput.setInputFiles('utils/attachmentFile.jpg');  
  101 |     await this.commentInput.fill('Picture has been uploaded');
  102 |     await console.log('File uploaded successfully');
  103 |     await this.save3Btn.click();
  104 | 
  105 | 
  106 |   } 
  107 | 
  108 |   async searchEmp(empName: string) {
  109 |     await this.searchIDBox.fill(empName);
  110 |     await this.searchBtn.click();
  111 |   }
  112 | }  
```