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
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
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
          - generic:
            - heading [level=6]
          - img "profile picture" [ref=e153] [cursor=pointer]
        - tablist [ref=e154]:
          - tab "Personal Details" [ref=e155]:
            - link "Personal Details" [ref=e156] [cursor=pointer]:
              - /url: /web/pim/viewPersonalDetails/empNumber/277
          - tab "Contact Details" [ref=e157]:
            - link "Contact Details" [ref=e158] [cursor=pointer]:
              - /url: /web/pim/contactDetails/empNumber/277
          - tab "Emergency Contacts" [ref=e159]:
            - link "Emergency Contacts" [ref=e160] [cursor=pointer]:
              - /url: /web/pim/viewEmergencyContacts/empNumber/277
          - tab "Dependents" [ref=e161]:
            - link "Dependents" [ref=e162] [cursor=pointer]:
              - /url: /web/pim/viewDependents/empNumber/277
          - tab "Immigration" [ref=e163]:
            - link "Immigration" [ref=e164] [cursor=pointer]:
              - /url: /web/pim/viewImmigration/empNumber/277
          - tab "Job" [ref=e165]:
            - link "Job" [ref=e166] [cursor=pointer]:
              - /url: /web/pim/viewJobDetails/empNumber/277
          - tab "Salary" [ref=e167]:
            - link "Salary" [ref=e168] [cursor=pointer]:
              - /url: /web/pim/viewSalaryList/empNumber/277
          - tab "Report-to" [ref=e169]:
            - link "Report-to" [ref=e170] [cursor=pointer]:
              - /url: /web/pim/viewReportToDetails/empNumber/277
          - tab "Qualifications" [ref=e171]:
            - link "Qualifications" [ref=e172] [cursor=pointer]:
              - /url: /web/pim/viewQualifications/empNumber/277
          - tab "Memberships" [ref=e173]:
            - link "Memberships" [ref=e174] [cursor=pointer]:
              - /url: /web/pim/viewMemberships/empNumber/277
      - generic [ref=e175]:
        - generic [ref=e176]:
          - heading "Personal Details" [level=6] [ref=e177]
          - separator [ref=e178]
          - generic [ref=e179]:
            - generic [ref=e186]:
              - generic [ref=e188]: Employee Full Name*
              - generic [ref=e189]:
                - textbox "First Name" [ref=e192]
                - textbox "Middle Name" [ref=e195]
                - textbox "Last Name" [ref=e198]
            - separator [ref=e199]
            - generic [ref=e200]:
              - generic [ref=e201]:
                - generic [ref=e203]:
                  - generic [ref=e205]: Employee Id
                  - textbox [ref=e207]
                - generic [ref=e209]:
                  - generic [ref=e211]: Other Id
                  - textbox [ref=e213]
              - generic [ref=e214]:
                - generic [ref=e216]:
                  - generic [ref=e218]: Driver's License Number
                  - textbox [ref=e220]
                - generic [ref=e222]:
                  - generic [ref=e224]: License Expiry Date
                  - generic [ref=e227]:
                    - textbox "yyyy-dd-mm" [ref=e228]: 2026-15-12
                    - generic [ref=e229] [cursor=pointer]: 
            - separator [ref=e230]
            - generic [ref=e231]:
              - generic [ref=e232]:
                - generic [ref=e234]:
                  - generic [ref=e236]: Nationality
                  - generic [ref=e239] [cursor=pointer]:
                    - generic [ref=e240]: "-- Select --"
                    - generic [ref=e242]: 
                - generic [ref=e244]:
                  - generic [ref=e246]: Marital Status
                  - generic [ref=e249] [cursor=pointer]:
                    - generic [ref=e250]: "-- Select --"
                    - generic [ref=e252]: 
              - generic [ref=e253]:
                - generic [ref=e255]:
                  - generic [ref=e257]: Date of Birth
                  - generic [ref=e260]:
                    - textbox "yyyy-dd-mm" [ref=e261]
                    - generic [ref=e262] [cursor=pointer]: 
                - generic [ref=e264]:
                  - generic [ref=e266]: Gender
                  - generic [ref=e267]:
                    - generic [ref=e271] [cursor=pointer]:
                      - radio "Male" [ref=e272]
                      - text: Male
                    - generic [ref=e277] [cursor=pointer]:
                      - radio "Female" [ref=e278]
                      - text: Female
            - separator [ref=e280]
            - generic [ref=e281]:
              - paragraph [ref=e282]: "* Required"
              - button "Save" [ref=e283] [cursor=pointer]
        - generic [ref=e284]:
          - separator [ref=e285]
          - generic [ref=e286]:
            - heading "Custom Fields" [level=6] [ref=e287]
            - separator [ref=e288]
            - generic [ref=e289]:
              - generic [ref=e291]:
                - generic [ref=e293]:
                  - generic [ref=e295]: Blood Type
                  - generic [ref=e298] [cursor=pointer]:
                    - generic [ref=e299]: "-- Select --"
                    - generic [ref=e301]: 
                - generic [ref=e303]:
                  - generic [ref=e305]: Test_Field
                  - textbox [ref=e307]
              - separator [ref=e308]
              - button "Save" [ref=e310] [cursor=pointer]
        - generic [ref=e311]:
          - separator [ref=e312]
          - generic [ref=e314]:
            - heading "Attachments" [level=6] [ref=e315]
            - button " Add" [ref=e316] [cursor=pointer]:
              - generic [ref=e317]: 
              - text: Add
          - generic [ref=e318]:
            - separator [ref=e319]
            - generic [ref=e321]: No Records Found
          - table [ref=e323]:
            - rowgroup [ref=e324]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e325]:
                - columnheader "" [ref=e326]:
                  - generic [ref=e328] [cursor=pointer]:
                    - checkbox "" [ref=e329]
                    - generic [ref=e331]: 
                - columnheader "File Name" [ref=e332]
                - columnheader "Description" [ref=e333]
                - columnheader "Size" [ref=e334]
                - columnheader "Type" [ref=e335]
                - columnheader "Date Added" [ref=e336]
                - columnheader "Added By" [ref=e337]
                - columnheader "Actions" [ref=e338]
            - rowgroup
    - generic [ref=e339]:
      - paragraph [ref=e340]: OrangeHRM OS 5.8
      - paragraph [ref=e341]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e342] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { LoginPage } from '../Pages/LoginPage';
  4  | import { TestConfig } from '../test.config';
  5  | import { LogoutPage } from '../Pages/LogoutPage';
  6  | import { HomePage } from '../Pages/HomePage'; 
  7  | import { AddEmployee } from '../Pages/AddEmployeePage'; 
  8  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  9  | 
  10 | let config: TestConfig;
  11 | let loginPage: LoginPage;
  12 | let logoutPage: LogoutPage;
  13 | let homePage: HomePage;
  14 | let addEmployeePage: AddEmployee;
  15 | 
  16 | 
  17 | // This hook runs before each test
  18 | test.beforeEach(async ({ page }) => {
  19 |   config = new TestConfig(); // Load config (URL, credentials)
  20 |   await page.goto(config.appUrl); // Navigate to base URL
  21 | 
  22 |   // Initialize page objects
  23 |   loginPage = new LoginPage(page);
  24 | 
  25 |       //Enter valid credentials and log in
  26 |     await loginPage.login(config.username, config.password);
  27 |     
  28 | 
  29 |      //Verify successful login by checking URL or page title
  30 |     await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
  31 |     await expect(loginPage.page).toHaveTitle(/OrangeHRM/);
  32 | 
  33 |     console.log("✅ Login is completed!");
  34 | 
  35 | 
  36 | 
  37 | });
  38 | 
  39 | // Optional cleanup after each test
> 40 | test.afterEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  41 |         logoutPage = new LogoutPage(page);
  42 |             await logoutPage.Logout();
  43 |          //Verify successful logout by checking URL or page title
  44 |         await expect(logoutPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/auth/login');
  45 |         await expect(logoutPage.page).toHaveTitle(/OrangeHRM/);
  46 |         console.log("✅ Logout is completed!");
  47 |   //await page.close(); // Close browser tab 
  48 | });
  49 | 
  50 | 
  51 | test('PIMTest',async({page})=>{
  52 |     homePage = new HomePage(page);
  53 |     addEmployeePage = new AddEmployee(page);
  54 |     let First_name = RandomDataUtil.getFirstName();
  55 |     let Middle_name = RandomDataUtil.getMiddleName();
  56 |     let Last_name = RandomDataUtil.getlastName();
  57 |     let Employee_Id = RandomDataUtil.getRandomAlphanumeric();
  58 | 
  59 | 
  60 |     await addEmployeePage.addEmp(First_name, Middle_name, Last_name, Employee_Id);
  61 |      console.log("✅ Employee is added successfully! with Employee ID: " + Employee_Id + " First Name: " + First_name + " Middle Name: " + Middle_name + " Last Name: " + Last_name);
  62 |     
  63 |     //await page.waitForTimeout(2000); //Wait for 2 seconds to observe the employee addition process
  64 |    
  65 |   //  await homePage.clickDashboard();
  66 |    // await homePage.clickPIM();
  67 |    // await addEmployeePage.searchEmp(Employee_Id);
  68 |    // console.log("✅ Employee is searched successfully! ");
  69 | 
  70 | 
  71 | }
  72 | );
  73 | 
```