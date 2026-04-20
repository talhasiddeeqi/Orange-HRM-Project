

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
  readonly searchIDBox: Locator;
  readonly searchBtn: Locator;  

  readonly DLNum: Locator;
  readonly LiscenceExpDate: Locator;
  readonly nationality: Locator;
  readonly maritalStatus: Locator
  readonly DOB: Locator;
  readonly genderM: Locator;
  readonly genderF: Locator;
  readonly save1Btn: Locator;

  readonly bloodType: Locator;
  readonly save2Btn: Locator;

  readonly attachmentBtn: Locator;
  readonly fileUploadInput: Locator;
  readonly commentInput: Locator
  readonly save3Btn: Locator;
  


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
    this.searchIDBox = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']");
    this.searchBtn = page.getByText('Search');

    this.DLNum = page.getByRole('textbox').nth(7);
    this.LiscenceExpDate = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
    this.nationality = page.locator('div').filter({ hasText: '-- Select --' }).nth(0);
    this.maritalStatus = page.locator('div').filter({ hasText: '-- Select --' }).nth(1);
    this.DOB = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).last();
    this.genderM = page.getByLabel('Male');
    this.genderF = page.getByLabel('Female');
    this.save1Btn = page.getByRole('button', { name: 'Save' }).nth(0);

    this.bloodType = page.locator('div').filter({ hasText: '-- Select --' }).nth(2);
    this.save2Btn = page.getByRole('button', { name: 'Save' }).nth(1);

    this.attachmentBtn = page.locator('i.oxd-icon.bi-plus.oxd-button-icon');
    this.fileUploadInput = page.getByText('Browse');
    this.commentInput = page.getByRole('textbox', { name: 'Type comment here' });
    this.save3Btn = page.getByRole('button', { name: 'Save' }).nth(2);



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

    await this.page.waitForTimeout(5000); // Wait for 5 seconds to ensure the employee is added before searching

    this.DLNum.fill('DL123456');
    this.LiscenceExpDate.fill('31-12-2026');
    this.nationality.click();
    await this.page.getByRole('option', { name: 'Indian' }).click();
    this.maritalStatus.click();
    await this.page.getByRole('option', { name: 'Single' }).click();
    this.DOB.fill('10-10-2000');
    this.genderM.check();
    this.save1Btn.click();  

    this.bloodType.click();
    await this.page.getByRole('option', { name: 'O+' }).click();
    this.save2Btn.click();  
      
    this.attachmentBtn.click();
    await this.fileUploadInput.setInputFiles('utils/attachmentFile.jpg');  
    await this.commentInput.fill('Picture has been uploaded');
    await console.log('File uploaded successfully');
    await this.save3Btn.click();


  } 

  async searchEmp(empName: string) {
    await this.searchIDBox.fill(empName);
    await this.searchBtn.click();
  }
}  