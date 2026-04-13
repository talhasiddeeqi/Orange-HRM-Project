# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_Logout.spec.ts >> User login test @master @sanity @regression
- Location: tests\Test_Logout.spec.ts:28:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { LoginPage } from '../Pages/LoginPage';
  4  | import { TestConfig } from '../test.config';
  5  | import { LogoutPage } from '../Pages/LogoutPage';
  6  | 
  7  | let config: TestConfig;
  8  | let loginPage: LoginPage;
  9  | let logoutPage: LogoutPage;
  10 | 
  11 | 
  12 | // This hook runs before each test
  13 | test.beforeEach(async ({ page }) => {
  14 |   config = new TestConfig(); // Load config (URL, credentials)
  15 |   await page.goto(config.appUrl); // Navigate to base URL
  16 | 
  17 |   // Initialize page objects
  18 |   loginPage = new LoginPage(page);
  19 |   logoutPage = new LogoutPage(page);
  20 | });
  21 | 
  22 | /* Optional cleanup after each test
  23 | test.afterEach(async ({ page }) => {
  24 |   await page.close(); // Close browser tab (good practice in local/dev run)
  25 | });
  26 | */
  27 | 
  28 | test('User login test @master @sanity @regression',async({ page })=>{
  29 | 
  30 |     // Navigate to the application's home page
  31 |     await page.goto(config.appUrl);
  32 | 
  33 |     // Step 1: Register a new account and capture the generated email
  34 |     await performLogin(config.username, config.password);
  35 |     console.log("✅ Login is completed!");
  36 |     page.waitForTimeout(2000); //Wait for 2 seconds to observe the login process
  37 | 
  38 |     // Step 2: Logout from the account
  39 |     await performLogout();
  40 |     console.log("✅ Logout is completed!");
> 41 |     page.waitForTimeout(2000); // Wait for 2 seconds to observe the logout process
     |          ^ Error: page.waitForTimeout: Test ended.
  42 | 
  43 |         // Step 1: Register a new account and capture the generated email
  44 |     await performLogin(config.username, config.password);
  45 |     console.log("✅ Login is completed!");
  46 |     page.waitForTimeout(2000); //Wait for 2 seconds to observe the login process
  47 | 
  48 | 
  49 | });
  50 | 
  51 | // Function to login
  52 | async function performLogin(username: string, password: string): Promise<void> {
  53 |     await loginPage.login(username, password);
  54 |      //Verify successful login by checking URL or page title
  55 |     await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
  56 |     await expect(loginPage.page).toHaveTitle(/OrangeHRM/);
  57 |     
  58 | 
  59 | };
  60 | 
  61 | // Function to logout
  62 | async function performLogout(): Promise<void> {
  63 |     await logoutPage.Logout();
  64 |      //Verify successful logout by checking URL or page title
  65 |     await expect(logoutPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/auth/login');
  66 |     await expect(logoutPage.page).toHaveTitle(/OrangeHRM/);
  67 | 
  68 | };
  69 | 
```