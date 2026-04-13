
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../Pages/LogoutPage';

let config: TestConfig;
let loginPage: LoginPage;
let logoutPage: LogoutPage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  loginPage = new LoginPage(page);
  logoutPage = new LogoutPage(page);
});

/* Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab
});
*/

test('User login test @master @sanity @regression',async({ page })=>{

    // Navigate to the application's home page
    await page.goto(config.appUrl);

    // Step 1: Register a new account and capture the generated email
    await performLogin(config.username, config.password);
    console.log("✅ Login is completed!");
    page.waitForTimeout(2000); //Wait for 2 seconds to observe the login process

    // Step 2: Logout from the account
    await performLogout();
    console.log("✅ Logout is completed!");



});

// Function to login
async function performLogin(username: string, password: string): Promise<void> {
    await loginPage.login(username, password);
     //Verify successful login by checking URL or page title
    await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
    await expect(loginPage.page).toHaveTitle(/OrangeHRM/);
    

};

// Function to logout
async function performLogout(): Promise<void> {
    await logoutPage.Logout();
     //Verify successful logout by checking URL or page title
    await expect(logoutPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/auth/login');
    await expect(logoutPage.page).toHaveTitle(/OrangeHRM/);

};
