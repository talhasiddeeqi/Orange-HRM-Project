
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../Pages/LogoutPage';
import { HomePage } from '../Pages/HomePage'; 
import { AddEmployee } from '../Pages/AddEmployeePage'; 
import { RandomDataUtil } from '../utils/randomDataGenerator';

let config: TestConfig;
let loginPage: LoginPage;
let logoutPage: LogoutPage;
let homePage: HomePage;
let addEmployeePage: AddEmployee;
     let First_name = RandomDataUtil.getFirstName();
     let Middle_name = RandomDataUtil.getMiddleName();
     let Last_name = RandomDataUtil.getlastName();
     let Employee_Id = RandomDataUtil.getRandomAlphanumeric();





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
  await page.close(); // Close browser tab (good practice in local/dev run)
});





test('Add & Search Employee', async ({ page }) => { 
    addEmployeePage = new AddEmployee(page);
    homePage = new HomePage(page);
    
    addEmployee(); 

   SearchEmployee(); // Call the function to search for the employee

}); 







async function addEmployee(): Promise<void> {
     homePage.clickPIM();
     await addEmployeePage.addEmp(First_name, Middle_name, Last_name, Employee_Id);
     console.log("✅ Employee is added successfully! with Employee ID: " + Employee_Id + " First Name: " + First_name + " Middle Name: " + Middle_name + " Last Name: " + Last_name);
 
    
};

async function SearchEmployee(): Promise<void> {
    homePage.clickPIM();
    await addEmployeePage.searchEmp(Employee_Id);
    console.log("✅ Employee is searched successfully! ");
  
    
};