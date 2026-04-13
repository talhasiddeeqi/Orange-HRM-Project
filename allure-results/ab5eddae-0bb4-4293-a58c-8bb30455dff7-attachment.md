# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_PIM.spec.ts >> Add & Search Employee
- Location: tests\Test_PIM.spec.ts:61:5

# Error details

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
              - paragraph [ref=e127]: manda user
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
          - heading "Abbey Conn" [level=6] [ref=e152]
          - img "profile picture" [ref=e155] [cursor=pointer]
        - tablist [ref=e156]:
          - tab "Personal Details" [ref=e157]:
            - link "Personal Details" [ref=e158] [cursor=pointer]:
              - /url: /web/pim/viewPersonalDetails/empNumber/199
          - tab "Contact Details" [ref=e159]:
            - link "Contact Details" [ref=e160] [cursor=pointer]:
              - /url: /web/pim/contactDetails/empNumber/199
          - tab "Emergency Contacts" [ref=e161]:
            - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
              - /url: /web/pim/viewEmergencyContacts/empNumber/199
          - tab "Dependents" [ref=e163]:
            - link "Dependents" [ref=e164] [cursor=pointer]:
              - /url: /web/pim/viewDependents/empNumber/199
          - tab "Immigration" [ref=e165]:
            - link "Immigration" [ref=e166] [cursor=pointer]:
              - /url: /web/pim/viewImmigration/empNumber/199
          - tab "Job" [ref=e167]:
            - link "Job" [ref=e168] [cursor=pointer]:
              - /url: /web/pim/viewJobDetails/empNumber/199
          - tab "Salary" [ref=e169]:
            - link "Salary" [ref=e170] [cursor=pointer]:
              - /url: /web/pim/viewSalaryList/empNumber/199
          - tab "Report-to" [ref=e171]:
            - link "Report-to" [ref=e172] [cursor=pointer]:
              - /url: /web/pim/viewReportToDetails/empNumber/199
          - tab "Qualifications" [ref=e173]:
            - link "Qualifications" [ref=e174] [cursor=pointer]:
              - /url: /web/pim/viewQualifications/empNumber/199
          - tab "Memberships" [ref=e175]:
            - link "Memberships" [ref=e176] [cursor=pointer]:
              - /url: /web/pim/viewMemberships/empNumber/199
      - generic [ref=e177]:
        - generic [ref=e178]:
          - heading "Personal Details" [level=6] [ref=e179]
          - separator [ref=e180]
          - generic [ref=e181]:
            - generic [ref=e185]:
              - generic [ref=e187]: Employee Full Name*
              - generic [ref=e188]:
                - textbox "First Name" [ref=e191]: Abbey
                - textbox "Middle Name" [ref=e194]: August
                - textbox "Last Name" [ref=e197]: Conn
            - separator [ref=e198]
            - generic [ref=e199]:
              - generic [ref=e200]:
                - generic [ref=e202]:
                  - generic [ref=e204]: Employee Id
                  - textbox [ref=e206]: IfGRw9eks
                - generic [ref=e208]:
                  - generic [ref=e210]: Other Id
                  - textbox [ref=e212]
              - generic [ref=e213]:
                - generic [ref=e215]:
                  - generic [ref=e217]: Driver's License Number
                  - textbox [ref=e219]
                - generic [ref=e221]:
                  - generic [ref=e223]: License Expiry Date
                  - generic [ref=e226]:
                    - textbox "yyyy-dd-mm" [ref=e227]
                    - generic [ref=e228] [cursor=pointer]: 
            - separator [ref=e229]
            - generic [ref=e230]:
              - generic [ref=e231]:
                - generic [ref=e233]:
                  - generic [ref=e235]: Nationality
                  - generic [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]: "-- Select --"
                    - generic [ref=e241]: 
                - generic [ref=e243]:
                  - generic [ref=e245]: Marital Status
                  - generic [ref=e248] [cursor=pointer]:
                    - generic [ref=e249]: "-- Select --"
                    - generic [ref=e251]: 
              - generic [ref=e252]:
                - generic [ref=e254]:
                  - generic [ref=e256]: Date of Birth
                  - generic [ref=e259]:
                    - textbox "yyyy-dd-mm" [ref=e260]
                    - generic [ref=e261] [cursor=pointer]: 
                - generic [ref=e263]:
                  - generic [ref=e265]: Gender
                  - generic [ref=e266]:
                    - generic [ref=e270] [cursor=pointer]:
                      - radio "Male" [ref=e271]
                      - text: Male
                    - generic [ref=e276] [cursor=pointer]:
                      - radio "Female" [ref=e277]
                      - text: Female
            - separator [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: "* Required"
              - button "Save" [ref=e282] [cursor=pointer]
        - generic [ref=e283]:
          - separator [ref=e284]
          - generic [ref=e285]:
            - heading "Custom Fields" [level=6] [ref=e286]
            - separator [ref=e287]
            - generic [ref=e288]:
              - generic [ref=e290]:
                - generic [ref=e292]:
                  - generic [ref=e294]: Blood Type
                  - generic [ref=e297] [cursor=pointer]:
                    - generic [ref=e298]: "-- Select --"
                    - generic [ref=e300]: 
                - generic [ref=e302]:
                  - generic [ref=e304]: Test_Field
                  - textbox [ref=e306]
              - separator [ref=e307]
              - button "Save" [ref=e309] [cursor=pointer]
        - generic [ref=e310]:
          - separator [ref=e311]
          - generic [ref=e313]:
            - heading "Attachments" [level=6] [ref=e314]
            - button " Add" [ref=e315] [cursor=pointer]:
              - generic [ref=e316]: 
              - text: Add
          - generic [ref=e317]:
            - separator [ref=e318]
            - generic [ref=e320]: No Records Found
          - table [ref=e322]:
            - rowgroup [ref=e323]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e324]:
                - columnheader "" [ref=e325]:
                  - generic [ref=e327] [cursor=pointer]:
                    - checkbox "" [ref=e328]
                    - generic [ref=e330]: 
                - columnheader "File Name" [ref=e331]
                - columnheader "Description" [ref=e332]
                - columnheader "Size" [ref=e333]
                - columnheader "Type" [ref=e334]
                - columnheader "Date Added" [ref=e335]
                - columnheader "Added By" [ref=e336]
                - columnheader "Actions" [ref=e337]
            - rowgroup
    - generic [ref=e338]:
      - paragraph [ref=e339]: OrangeHRM OS 5.8
      - paragraph [ref=e340]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e341] [cursor=pointer]:
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
  15 |      let First_name = RandomDataUtil.getFirstName();
  16 |      let Middle_name = RandomDataUtil.getMiddleName();
  17 |      let Last_name = RandomDataUtil.getlastName();
  18 |      let Employee_Id = RandomDataUtil.getRandomAlphanumeric();
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | // This hook runs before each test
  25 | test.beforeEach(async ({ page }) => {
  26 |   config = new TestConfig(); // Load config (URL, credentials)
  27 |   await page.goto(config.appUrl); // Navigate to base URL
  28 | 
  29 |   // Initialize page objects
  30 |   loginPage = new LoginPage(page);
  31 | 
  32 |       //Enter valid credentials and log in
  33 |     await loginPage.login(config.username, config.password);
  34 |     
  35 | 
  36 |      //Verify successful login by checking URL or page title
  37 |     await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
  38 |     await expect(loginPage.page).toHaveTitle(/OrangeHRM/);
  39 | 
  40 |     console.log("✅ Login is completed!");
  41 | 
  42 | 
  43 | 
  44 | });
  45 | 
  46 | // Optional cleanup after each test
> 47 | test.afterEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  48 |         logoutPage = new LogoutPage(page);
  49 |             await logoutPage.Logout();
  50 |          //Verify successful logout by checking URL or page title
  51 |         await expect(logoutPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/auth/login');
  52 |         await expect(logoutPage.page).toHaveTitle(/OrangeHRM/);
  53 |         console.log("✅ Logout is completed!");
  54 |   await page.close(); // Close browser tab (good practice in local/dev run)
  55 | });
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | test('Add & Search Employee', async ({ page }) => { 
  62 |     addEmployeePage = new AddEmployee(page);
  63 |     homePage = new HomePage(page);
  64 |     
  65 |     addEmployee(); 
  66 |     page.waitForTimeout(10000); // Call the function to add an employee
  67 |       //Search Employee after adding employee
  68 |     SearchEmployee(); // Call the function to search for the employee
  69 | 
  70 | }); 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | async function addEmployee(): Promise<void> {
  79 |      homePage.clickPIM();
  80 |      await addEmployeePage.addEmp(First_name, Middle_name, Last_name, Employee_Id);
  81 |      console.log("✅ Employee is added successfully! with Employee ID: " + Employee_Id + " First Name: " + First_name + " Middle Name: " + Middle_name + " Last Name: " + Last_name);
  82 |  
  83 |     
  84 | };
  85 | 
  86 | async function SearchEmployee(): Promise<void> {
  87 |     homePage.clickPIM();
  88 |     homePage.clickPIM();
  89 |     await addEmployeePage.searchEmp(Employee_Id);
  90 |     console.log("✅ Employee is searched successfully! ");
  91 |   
  92 |     
  93 | };
```