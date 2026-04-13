import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    // Locators
    private readonly lnkAdmin: Locator;
    private readonly lnkPIM: Locator;
    private readonly lnkLeave: Locator;
    private readonly lnkTime: Locator;
    private readonly lnkRecruitment: Locator;
    private readonly lnkMyInfo: Locator;
    private readonly lnkPerformance: Locator;
    private readonly lnkDashboard: Locator;
    private readonly lnkDirectory: Locator;
    private readonly lnkMaintenance: Locator;
    private readonly lnkClaim: Locator;
    private readonly lnkBuzz: Locator;
    private readonly txtSearchbox: Locator;
  

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators
        this.lnkAdmin = page.locator('a:has-text("Admin")');
        this.lnkPIM = page.locator('a:has-text("PIM")');
        this.lnkLeave = page.locator('a:has-text("Leave")');
        this.lnkTime = page.locator('a:has-text("Time")');
        this.lnkRecruitment = page.locator('a:has-text("Recruitment")');
        this.lnkMyInfo = page.locator('a:has-text("My Info")');
        this.lnkPerformance = page.locator('a:has-text("Performance")');
        this.lnkDashboard = page.locator('a:has-text("Dashboard")');
        this.lnkDirectory = page.locator('a:has-text("Directory")');
        this.lnkMaintenance = page.locator('a:has-text("Maintenance")');
        this.lnkClaim = page.locator('a:has-text("Claim")');
        this.lnkBuzz = page.locator('a:has-text("Buzz")');
        this.txtSearchbox = page.locator('input[placeholder="Search"]');
     
    }

    // Actions
    // Check if HomePage exists
    async isHomePageExists(){
        let title:string = await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    // Enter search text in the search box
    async enterSearchText(pText: string){
        try {
            await this.txtSearchbox.fill(pText);
        } catch (error) {
            console.log(`Exception occurred while entering search text: ${error}`);
            throw error;
        }
    }



    // Click "Admin" link
    async clickAdmin(){
        try {
            await this.lnkAdmin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Admin': ${error}`);
            throw error;
        }
    }

    // Click "PIM" link
    async clickPIM(){
        try {
            await this.lnkPIM.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'PIM': ${error}`);
            throw error;
        }
    }

    // Click "Leave" link
    async clickLeave(){
        try {
            await this.lnkLeave.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Leave': ${error}`);
            throw error;
        }
    }

    // Click "Time" link
    async clickTime(){
        try {
            await this.lnkTime.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Time': ${error}`);
            throw error;
        }
    }

    // Click "Recruitment" link
    async clickRecruitment(){
        try {
            await this.lnkRecruitment.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Recruitment': ${error}`);
            throw error;
        }
    }

    // Click "My Info" link
    async clickMyInfo(){
        try {
            await this.lnkMyInfo.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Info': ${error}`);
            throw error;
        }
    }

    // Click "Performance" link
    async clickPerformance(){
        try {
            await this.lnkPerformance.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Performance': ${error}`);
            throw error;
        }
    }

    // Click "Dashboard" link
    async clickDashboard(){
        try {
            await this.lnkDashboard.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Dashboard': ${error}`);
            throw error;
        }
    }

    // Click "Directory" link
    async clickDirectory(){
        try {
            await this.lnkDirectory.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Directory': ${error}`);
            throw error;
        }
    }   

    // Click "Maintenance" link         
    async clickMaintenance(){
        try {
            await this.lnkMaintenance.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Maintenance': ${error}`);
            throw error;
        }
    }

    // Click "Claim" link
    async clickClaim(){
        try {
            await this.lnkClaim.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Claim': ${error}`);
            throw error;
        }
    }

    // Click "Buzz" link
    async clickBuzz(){
        try {
            await this.lnkBuzz.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Buzz': ${error}`);
            throw error;
        }   
    }


}