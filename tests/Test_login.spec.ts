import { test, expect } from '@playwright/test'; 
import { LoginPage } from '../Pages/LoginPage'; 
import { AddEmployee } from '../Pages/AddEmployee';
  
test('Login with valid credentials and Add Employee', async ({ page }) => { 
  const loginPage = new LoginPage(page); 
  const addEmployee = new AddEmployee(page); 
  await loginPage.goto(); 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
  await loginPage.login('Admin', 'admin123'); 
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 
  await addEmployee.addEmp('Dyane','The Rock','Johnson','012458');
  //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/238'); 

}); 

