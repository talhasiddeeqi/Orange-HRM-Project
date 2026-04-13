
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { TestConfig } from '../test.config';

let config: TestConfig;
let loginPage: LoginPage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  loginPage = new LoginPage(page);
});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab 
});


test('User login test @master @sanity @regression',async()=>{

    //Enter valid credentials and log in
    await loginPage.login(config.username, config.password);
    

     //Verify successful login by checking URL or page title
    await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
    await expect(loginPage.page).toHaveTitle(/OrangeHRM/);



}

)
