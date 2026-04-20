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