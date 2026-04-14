
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { TestConfig } from '../test.config';
import { LoginPage } from '../Pages/LoginPage';
import { LogoutPage } from '../Pages/LogoutPage';

let homePage: HomePage;
let config: TestConfig;
let loginPage: LoginPage;
let logoutPage: LogoutPage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  loginPage = new LoginPage(page);

      //Enter valid credentials and log in
    await loginPage.login(config.username, config.password);
    

     //Verify successful login by checking URL or page title
    await expect(loginPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');
    await expect(loginPage.page).toHaveTitle(/OrangeHRM/);

    console.log("✅ Login is completed!");



});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
      logoutPage = new LogoutPage(page);
            await logoutPage.Logout();
         //Verify successful logout by checking URL or page title
        await expect(logoutPage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/auth/login');
        await expect(logoutPage.page).toHaveTitle(/OrangeHRM/);
        console.log("✅ Logout is completed!");
  await page.close(); // Close browser tab 
});


test('HomePage Buttons',async({page})=>{
homePage = new HomePage(page);
    //Enter valid credentials and log in
    await homePage.clickAdmin();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/admin/viewSystemUsers');

    await homePage.clickPIM();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/pim/viewEmployeeList');

    await homePage.clickLeave();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/leave/viewLeaveList');

    await homePage.clickTime();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/time/viewEmployeeTimesheet');

    await homePage.clickRecruitment();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/recruitment/viewCandidates');

    await homePage.clickMyInfo();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/pim/viewPersonalDetails/empNumber/7');

    await homePage.clickPerformance();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/performance/searchEvaluatePerformanceReview');

    await homePage.clickDashboard();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/dashboard/index');

    await homePage.clickDirectory();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/directory/viewDirectory');

    //await homePage.clickMaintenance();
      // await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/maintenance/purgeEmployee');
           
    await homePage.clickClaim();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/claim/viewAssignClaim');

    await homePage.clickBuzz();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/buzz/viewBuzz');





}

)
