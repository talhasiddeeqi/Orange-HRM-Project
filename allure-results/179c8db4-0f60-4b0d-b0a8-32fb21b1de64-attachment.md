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
    - generic [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - heading "Employee Information" [level=5] [ref=e150]
          - button "" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]: 
        - separator [ref=e155]
        - generic [ref=e157]:
          - generic [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e163]: Employee Name
              - textbox "Type for hints..." [ref=e167]
            - generic [ref=e169]:
              - generic [ref=e171]: Employee Id
              - textbox [active] [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e177]: Employment Status
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: "-- Select --"
                - generic [ref=e183]: 
            - generic [ref=e185]:
              - generic [ref=e187]: Include
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: Current Employees Only
                - generic [ref=e193]: 
            - generic [ref=e195]:
              - generic [ref=e197]: Supervisor Name
              - textbox "Type for hints..." [ref=e201]
            - generic [ref=e203]:
              - generic [ref=e205]: Job Title
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: "-- Select --"
                - generic [ref=e211]: 
            - generic [ref=e213]:
              - generic [ref=e215]: Sub Unit
              - generic [ref=e218] [cursor=pointer]:
                - generic [ref=e219]: "-- Select --"
                - generic [ref=e221]: 
          - separator [ref=e222]
          - generic [ref=e223]:
            - button "Reset" [ref=e224] [cursor=pointer]
            - button "Search" [ref=e225] [cursor=pointer]
      - generic [ref=e226]:
        - button " Add" [ref=e228] [cursor=pointer]:
          - generic [ref=e229]: 
          - text: Add
        - generic [ref=e230]:
          - separator [ref=e231]
          - generic [ref=e233]: (6) Records Found
        - table [ref=e235]:
          - rowgroup [ref=e236]:
            - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions" [ref=e237]:
              - columnheader "" [ref=e238]:
                - generic [ref=e240] [cursor=pointer]:
                  - checkbox "" [ref=e241]
                  - generic [ref=e243]: 
              - columnheader "Id " [ref=e244]:
                - text: Id
                - generic [ref=e245]:
                  - generic [ref=e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=e247]:
                - text: First (& Middle) Name
                - generic [ref=e248]:
                  - generic [ref=e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=e250]:
                - text: Last Name
                - generic [ref=e251]:
                  - generic [ref=e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=e253]:
                - text: Job Title
                - generic [ref=e254]:
                  - generic [ref=e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=e256]:
                - text: Employment Status
                - generic [ref=e257]:
                  - generic [ref=e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=e259]:
                - text: Sub Unit
                - generic [ref=e260]:
                  - generic [ref=e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=e262]:
                - text: Supervisor
                - generic [ref=e263]:
                  - generic [ref=e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=e265]
          - rowgroup [ref=e266]:
            - row " John1776081710053_0 Smith  " [ref=e268] [cursor=pointer]:
              - cell "" [ref=e269]:
                - generic [ref=e272]:
                  - checkbox "" [ref=e273]
                  - generic [ref=e275]: 
              - cell [ref=e276]
              - cell "John1776081710053_0" [ref=e277]:
                - generic [ref=e278]: John1776081710053_0
              - cell "Smith" [ref=e279]:
                - generic [ref=e280]: Smith
              - cell [ref=e281]
              - cell [ref=e282]
              - cell [ref=e283]
              - cell [ref=e284]
              - cell " " [ref=e285]:
                - generic [ref=e286]:
                  - button "" [ref=e287]:
                    - generic [ref=e288]: 
                  - button "" [ref=e289]:
                    - generic [ref=e290]: 
            - row " John1776081717453_1 Smith  " [ref=e292] [cursor=pointer]:
              - cell "" [ref=e293]:
                - generic [ref=e296]:
                  - checkbox "" [ref=e297]
                  - generic [ref=e299]: 
              - cell [ref=e300]
              - cell "John1776081717453_1" [ref=e301]:
                - generic [ref=e302]: John1776081717453_1
              - cell "Smith" [ref=e303]:
                - generic [ref=e304]: Smith
              - cell [ref=e305]
              - cell [ref=e306]
              - cell [ref=e307]
              - cell [ref=e308]
              - cell " " [ref=e309]:
                - generic [ref=e310]:
                  - button "" [ref=e311]:
                    - generic [ref=e312]: 
                  - button "" [ref=e313]:
                    - generic [ref=e314]: 
            - row " fjB0DeSZ8 Johnathan Brooklyn Stokes  " [ref=e316] [cursor=pointer]:
              - cell "" [ref=e317]:
                - generic [ref=e320]:
                  - checkbox "" [ref=e321]
                  - generic [ref=e323]: 
              - cell "fjB0DeSZ8" [ref=e324]:
                - generic [ref=e325]: fjB0DeSZ8
              - cell "Johnathan Brooklyn" [ref=e326]:
                - generic [ref=e327]: Johnathan Brooklyn
              - cell "Stokes" [ref=e328]:
                - generic [ref=e329]: Stokes
              - cell [ref=e330]
              - cell [ref=e331]
              - cell [ref=e332]
              - cell [ref=e333]
              - cell " " [ref=e334]:
                - generic [ref=e335]:
                  - button "" [ref=e336]:
                    - generic [ref=e337]: 
                  - button "" [ref=e338]:
                    - generic [ref=e339]: 
            - row " muser manda akhil user HR Manager Full-Time Permanent Human Resources " [ref=e341] [cursor=pointer]:
              - cell "" [ref=e342]:
                - generic [ref=e346]:
                  - checkbox "" [ref=e347]
                  - generic [ref=e349]: 
              - cell "muser" [ref=e350]:
                - generic [ref=e351]: muser
              - cell "manda akhil" [ref=e352]:
                - generic [ref=e353]: manda akhil
              - cell "user" [ref=e354]:
                - generic [ref=e355]: user
              - cell "HR Manager" [ref=e356]:
                - generic [ref=e357]: HR Manager
              - cell "Full-Time Permanent" [ref=e358]:
                - generic [ref=e359]: Full-Time Permanent
              - cell "Human Resources" [ref=e360]:
                - generic [ref=e361]: Human Resources
              - cell [ref=e362]
              - cell "" [ref=e363]:
                - button "" [ref=e365]:
                  - generic [ref=e366]: 
            - row " l1RDJh40G Mozelle Julien Auer  " [ref=e368] [cursor=pointer]:
              - cell "" [ref=e369]:
                - generic [ref=e372]:
                  - checkbox "" [ref=e373]
                  - generic [ref=e375]: 
              - cell "l1RDJh40G" [ref=e376]:
                - generic [ref=e377]: l1RDJh40G
              - cell "Mozelle Julien" [ref=e378]:
                - generic [ref=e379]: Mozelle Julien
              - cell "Auer" [ref=e380]:
                - generic [ref=e381]: Auer
              - cell [ref=e382]
              - cell [ref=e383]
              - cell [ref=e384]
              - cell [ref=e385]
              - cell " " [ref=e386]:
                - generic [ref=e387]:
                  - button "" [ref=e388]:
                    - generic [ref=e389]: 
                  - button "" [ref=e390]:
                    - generic [ref=e391]: 
            - row " 0374 sai ram V  " [ref=e393] [cursor=pointer]:
              - cell "" [ref=e394]:
                - generic [ref=e397]:
                  - checkbox "" [ref=e398]
                  - generic [ref=e400]: 
              - cell "0374" [ref=e401]:
                - generic [ref=e402]: "0374"
              - cell "sai ram" [ref=e403]:
                - generic [ref=e404]: sai ram
              - cell "V" [ref=e405]:
                - generic [ref=e406]: V
              - cell [ref=e407]
              - cell [ref=e408]
              - cell [ref=e409]
              - cell [ref=e410]
              - cell " " [ref=e411]:
                - generic [ref=e412]:
                  - button "" [ref=e413]:
                    - generic [ref=e414]: 
                  - button "" [ref=e415]:
                    - generic [ref=e416]: 
    - generic [ref=e418]:
      - paragraph [ref=e419]: OrangeHRM OS 5.8
      - paragraph [ref=e420]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e421] [cursor=pointer]:
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
  65 |     addEmployee(); // Call the function to add an employee
  66 |       //Search Employee after adding employee
  67 |     SearchEmployee(); // Call the function to search for the employee
  68 | 
  69 | }); 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | async function addEmployee(): Promise<void> {
  78 |      homePage.clickPIM();
  79 |      await addEmployeePage.addEmp(First_name, Middle_name, Last_name, Employee_Id);
  80 |      console.log("✅ Employee is added successfully! with Employee ID: " + Employee_Id + " First Name: " + First_name + " Middle Name: " + Middle_name + " Last Name: " + Last_name);
  81 |  
  82 |     
  83 | };
  84 | 
  85 | async function SearchEmployee(): Promise<void> {
  86 |     homePage.clickPIM();
  87 |     await addEmployeePage.searchEmp(Employee_Id);
  88 |     console.log("✅ Employee is searched successfully! ");
  89 |   
  90 |     
  91 | };
```