import { test, expect } from '@playwright/test'; 
import { LoginPage } from '../Pages/LoginPage'; 
import { AddEmployee } from '../Pages/AddEmployeePage';
import { TestConfig } from '../test.config';
import { RandomDataUtil } from '../utils/randomDataGenerator';



  
test('Login with valid credentials and Add Employee', async ({ page }) => { 
  const config = new TestConfig();
  const loginPage = new LoginPage(page); 
  const addEmployee = new AddEmployee(page); 
  await loginPage.goto(); 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await loginPage.login(config.username, config.password); 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 
  await addEmployee.addEmp(RandomDataUtil.getFirstName(), RandomDataUtil.getMiddleName(), RandomDataUtil.getlastName(),RandomDataUtil.getRandomAlphanumeric());

    
  
  //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/238'); 

}); 

