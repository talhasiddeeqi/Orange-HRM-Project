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
Error: locator.check: Error: strict mode violation: getByLabel('Male') resolved to 2 elements:
    1) <input value="1" type="radio" data-v-7ef819fd=""/> aka getByRole('radio', { name: 'Male', exact: true })
    2) <input value="2" type="radio" data-v-7ef819fd=""/> aka getByRole('radio', { name: 'Female' })

Call log:
  - waiting for getByLabel('Male')

```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-userdropdown-link:has-text(\'Logout\')')
    - locator resolved to <a role="menuitem" href="/web/auth/logout" class="oxd-userdropdown-link">Logout</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'O+' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic:
      - complementary [ref=e4]:
        - navigation "Sidepanel" [ref=e5]:
          - generic [ref=e6]:
            - link "client brand banner" [ref=e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=e9]
            - text: 
          - generic [ref=e10]:
            - generic [ref=e11]:
              - generic [ref=e12]:
                - textbox "Search" [ref=e15]
                - button "" [ref=e16] [cursor=pointer]:
                  - generic [ref=e17]: 
              - separator [ref=e18]
            - list [ref=e19]:
              - listitem [ref=e20]:
                - link "Admin" [ref=e21] [cursor=pointer]:
                  - /url: /web/admin/viewAdminModule
                  - generic [ref=e24]: Admin
              - listitem [ref=e25]:
                - link "PIM" [ref=e26] [cursor=pointer]:
                  - /url: /web/pim/viewPimModule
                  - generic [ref=e40]: PIM
              - listitem [ref=e41]:
                - link "Leave" [ref=e42] [cursor=pointer]:
                  - /url: /web/leave/viewLeaveModule
                  - generic [ref=e45]: Leave
              - listitem [ref=e46]:
                - link "Time" [ref=e47] [cursor=pointer]:
                  - /url: /web/time/viewTimeModule
                  - generic [ref=e53]: Time
              - listitem [ref=e54]:
                - link "Recruitment" [ref=e55] [cursor=pointer]:
                  - /url: /web/recruitment/viewRecruitmentModule
                  - generic [ref=e61]: Recruitment
              - listitem [ref=e62]:
                - link "My Info" [ref=e63] [cursor=pointer]:
                  - /url: /web/pim/viewMyDetails
                  - generic [ref=e69]: My Info
              - listitem [ref=e70]:
                - link "Performance" [ref=e71] [cursor=pointer]:
                  - /url: /web/performance/viewPerformanceModule
                  - generic [ref=e79]: Performance
              - listitem [ref=e80]:
                - link "Dashboard" [ref=e81] [cursor=pointer]:
                  - /url: /web/dashboard/index
                  - generic [ref=e84]: Dashboard
              - listitem [ref=e85]:
                - link "Directory" [ref=e86] [cursor=pointer]:
                  - /url: /web/directory/viewDirectory
                  - generic [ref=e89]: Directory
              - listitem [ref=e90]:
                - link "Maintenance" [ref=e91] [cursor=pointer]:
                  - /url: /web/maintenance/viewMaintenanceModule
                  - generic [ref=e95]: Maintenance
              - listitem [ref=e96]:
                - link "Claim" [ref=e97] [cursor=pointer]:
                  - /url: /web/claim/viewClaimModule
                  - img [ref=e100]
                  - generic [ref=e104]: Claim
              - listitem [ref=e105]:
                - link "Buzz" [ref=e106] [cursor=pointer]:
                  - /url: /web/buzz/viewBuzz
                  - generic [ref=e109]: Buzz
      - banner [ref=e110]:
        - generic [ref=e111]:
          - generic [ref=e112]:
            - text: 
            - heading "PIM" [level=6] [ref=e114]
          - link "Upgrade" [ref=e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
          - list [ref=e123]:
            - listitem [ref=e124]:
              - generic [ref=e125] [cursor=pointer]:
                - img "profile picture" [ref=e126]
                - paragraph [ref=e127]: "#$ @"
                - generic [ref=e128]: 
        - navigation "Topbar Menu" [ref=e130]:
          - list [ref=e131]:
            - listitem [ref=e132] [cursor=pointer]:
              - generic [ref=e133]:
                - text: Configuration
                - generic [ref=e134]: 
            - listitem [ref=e135] [cursor=pointer]:
              - link "Employee List" [ref=e136]:
                - /url: "#"
            - listitem [ref=e137] [cursor=pointer]:
              - link "Add Employee" [ref=e138]:
                - /url: "#"
            - listitem [ref=e139] [cursor=pointer]:
              - link "Reports" [ref=e140]:
                - /url: "#"
            - button "" [ref=e142] [cursor=pointer]:
              - generic [ref=e143]: 
    - generic [ref=e144]:
      - generic [ref=e148]:
        - generic [ref=e149]:
          - generic [ref=e150]:
            - heading "Arianna Schinner" [level=6] [ref=e152]
            - img "profile picture" [ref=e155] [cursor=pointer]
          - tablist [ref=e156]:
            - tab "Personal Details" [ref=e157]:
              - link "Personal Details" [ref=e158] [cursor=pointer]:
                - /url: /web/pim/viewPersonalDetails/empNumber/279
            - tab "Contact Details" [ref=e159]:
              - link "Contact Details" [ref=e160] [cursor=pointer]:
                - /url: /web/pim/contactDetails/empNumber/279
            - tab "Emergency Contacts" [ref=e161]:
              - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
                - /url: /web/pim/viewEmergencyContacts/empNumber/279
            - tab "Dependents" [ref=e163]:
              - link "Dependents" [ref=e164] [cursor=pointer]:
                - /url: /web/pim/viewDependents/empNumber/279
            - tab "Immigration" [ref=e165]:
              - link "Immigration" [ref=e166] [cursor=pointer]:
                - /url: /web/pim/viewImmigration/empNumber/279
            - tab "Job" [ref=e167]:
              - link "Job" [ref=e168] [cursor=pointer]:
                - /url: /web/pim/viewJobDetails/empNumber/279
            - tab "Salary" [ref=e169]:
              - link "Salary" [ref=e170] [cursor=pointer]:
                - /url: /web/pim/viewSalaryList/empNumber/279
            - tab "Report-to" [ref=e171]:
              - link "Report-to" [ref=e172] [cursor=pointer]:
                - /url: /web/pim/viewReportToDetails/empNumber/279
            - tab "Qualifications" [ref=e173]:
              - link "Qualifications" [ref=e174] [cursor=pointer]:
                - /url: /web/pim/viewQualifications/empNumber/279
            - tab "Memberships" [ref=e175]:
              - link "Memberships" [ref=e176] [cursor=pointer]:
                - /url: /web/pim/viewMemberships/empNumber/279
        - generic [ref=e177]:
          - generic [ref=e178]:
            - heading "Personal Details" [level=6] [ref=e179]
            - separator [ref=e180]
            - generic [ref=e181]:
              - generic [ref=e188]:
                - generic [ref=e190]: Employee Full Name*
                - generic [ref=e191]:
                  - textbox "First Name" [ref=e194]: Arianna
                  - textbox "Middle Name" [ref=e197]: Kobe
                  - textbox "Last Name" [ref=e200]: Schinner
              - separator [ref=e201]
              - generic [ref=e202]:
                - generic [ref=e203]:
                  - generic [ref=e205]:
                    - generic [ref=e207]: Employee Id
                    - textbox [ref=e209]: WuM3bfB3F
                  - generic [ref=e211]:
                    - generic [ref=e213]: Other Id
                    - textbox [ref=e215]
                - generic [ref=e216]:
                  - generic [ref=e218]:
                    - generic [ref=e220]: Driver's License Number
                    - textbox [ref=e222]
                  - generic [ref=e224]:
                    - generic [ref=e226]: License Expiry Date
                    - generic [ref=e229]:
                      - textbox "yyyy-dd-mm" [ref=e230]: 2026-15-04
                      - generic [ref=e231] [cursor=pointer]: 
              - separator [ref=e232]
              - generic [ref=e233]:
                - generic [ref=e234]:
                  - generic [ref=e236]:
                    - generic [ref=e238]: Nationality
                    - generic [ref=e241] [cursor=pointer]:
                      - generic [ref=e242]: Djibouti
                      - generic [ref=e244]: 
                  - generic [ref=e246]:
                    - generic [ref=e248]: Marital Status
                    - generic [ref=e251] [cursor=pointer]:
                      - generic [ref=e252]: Single
                      - generic [ref=e254]: 
                - generic [ref=e255]:
                  - generic [ref=e257]:
                    - generic [ref=e259]: Date of Birth
                    - generic [ref=e262]:
                      - textbox "yyyy-dd-mm" [ref=e263]: 2000-10-10
                      - generic [ref=e264] [cursor=pointer]: 
                  - generic [ref=e266]:
                    - generic [ref=e268]: Gender
                    - generic [ref=e269]:
                      - generic [ref=e273] [cursor=pointer]:
                        - radio "Male" [ref=e274]
                        - text: Male
                      - generic [ref=e279] [cursor=pointer]:
                        - radio "Female" [ref=e280]
                        - text: Female
              - separator [ref=e282]
              - generic [ref=e283]:
                - paragraph [ref=e284]: "* Required"
                - button "Save" [ref=e285] [cursor=pointer]
          - generic [ref=e286]:
            - separator [ref=e287]
            - generic [ref=e288]:
              - heading "Custom Fields" [level=6] [ref=e289]
              - separator [ref=e290]
              - generic [ref=e291]:
                - generic [ref=e293]:
                  - generic [ref=e295]:
                    - generic [ref=e297]: Blood Type
                    - generic [ref=e300] [cursor=pointer]:
                      - generic [ref=e301]: "-- Select --"
                      - generic [ref=e303]: 
                  - generic [ref=e305]:
                    - generic [ref=e307]: Test_Field
                    - textbox [ref=e309]
                - separator [ref=e310]
                - button "Save" [ref=e312] [cursor=pointer]
          - generic [ref=e313]:
            - separator [ref=e314]
            - generic [ref=e316]:
              - heading "Attachments" [level=6] [ref=e317]
              - button " Add" [ref=e318] [cursor=pointer]:
                - generic [ref=e319]: 
                - text: Add
            - generic [ref=e320]:
              - separator [ref=e321]
              - generic [ref=e323]: No Records Found
            - table [ref=e325]:
              - rowgroup [ref=e326]:
                - row " File Name Description Size Type Date Added Added By Actions" [ref=e327]:
                  - columnheader "" [ref=e328]:
                    - generic [ref=e330] [cursor=pointer]:
                      - checkbox "" [ref=e331]
                      - generic [ref=e333]: 
                  - columnheader "File Name" [ref=e334]
                  - columnheader "Description" [ref=e335]
                  - columnheader "Size" [ref=e336]
                  - columnheader "Type" [ref=e337]
                  - columnheader "Date Added" [ref=e338]
                  - columnheader "Added By" [ref=e339]
                  - columnheader "Actions" [ref=e340]
              - rowgroup
      - generic [ref=e341]:
        - paragraph [ref=e342]: OrangeHRM OS 5.8
        - paragraph [ref=e343]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=e344] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=e346] [cursor=pointer]:
    - generic [ref=e347]:
      - generic [ref=e350]: 
      - generic [ref=e351]:
        - paragraph [ref=e352]: Success
        - paragraph [ref=e353]: Successfully Updated
    - button "×" [ref=e355]
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
  53  |     this.nationality = page.locator('div').filter({ hasText: '-- Select --' }).nth(0);
  54  |     this.maritalStatus = page.locator('div').filter({ hasText: '-- Select --' }).nth(1);
  55  |     this.DOB = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).last();
  56  |     this.genderM = page.getByLabel('Male');
  57  |     this.genderF = page.getByLabel('Female');
  58  |     this.save1Btn = page.getByRole('button', { name: 'Save' }).nth(0);
  59  | 
  60  |     this.bloodType = page.locator('div').filter({ hasText: '-- Select --' }).nth(2);
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
  87  |     this.LiscenceExpDate.click();
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
> 100 |     await this.page.getByRole('option', { name: 'O+' }).click();
      |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
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