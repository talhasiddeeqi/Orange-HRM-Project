
import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';

let homePage: HomePage;

// This hook runs before each test
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
});

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab
});


test('HomePage Buttons',async()=>{

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

    await homePage.clickMaintenance();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/maintenance/purgeEmployee');
           
    await homePage.clickClaim();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/claim/viewClaims');

    await homePage.clickBuzz();
       await expect(homePage.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/buzz/viewBuzz');





}

)
