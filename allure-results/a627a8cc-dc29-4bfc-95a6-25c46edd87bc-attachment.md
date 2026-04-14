# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_EndtoEnd.spec.ts >> EndtoEnd Test
- Location: tests\Test_EndtoEnd.spec.ts:51:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator(':text-is("PIM")') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">PIM</span> aka getByRole('link', { name: 'PIM' })
    2) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">PIM</h6> aka getByRole('heading', { name: 'PIM' })

Call log:
  - waiting for locator(':text-is("PIM")')

```

# Test source

```ts
  1   | import { Page, expect, Locator } from '@playwright/test';
  2   | 
  3   | export class HomePage {
  4   |     readonly page: Page;
  5   |     
  6   |     // Locators
  7   |     private readonly lnkAdmin: Locator;
  8   |     private readonly lnkPIM: Locator;
  9   |     private readonly lnkLeave: Locator;
  10  |     private readonly lnkTime: Locator;
  11  |     private readonly lnkRecruitment: Locator;
  12  |     private readonly lnkMyInfo: Locator;
  13  |     private readonly lnkPerformance: Locator;
  14  |     private readonly lnkDashboard: Locator;
  15  |     private readonly lnkDirectory: Locator;
  16  |     private readonly lnkMaintenance: Locator;
  17  |     private readonly lnkClaim: Locator;
  18  |     private readonly lnkBuzz: Locator;
  19  |     private readonly txtSearchbox: Locator;
  20  |   
  21  | 
  22  |     constructor(page: Page) {
  23  |         this.page = page;
  24  |         
  25  |         // Initialize locators
  26  |         this.lnkAdmin = page.locator(':text-is("Admin")');
  27  |         this.lnkPIM = page.locator(':text-is("PIM")');
  28  |         this.lnkLeave = page.locator(':text-is("Leave")');
  29  |         this.lnkTime = page.locator(':text-is("Time")');
  30  |         this.lnkRecruitment = page.locator(':text-is("Recruitment")');
  31  |         this.lnkMyInfo = page.locator(':text-is("My Info")');
  32  |         this.lnkPerformance = page.locator('a:has-text("Performance")');
  33  |         this.lnkDashboard = page.locator('a:has-text("Dashboard")');
  34  |         this.lnkDirectory = page.locator('a:has-text("Directory")');
  35  |         this.lnkMaintenance = page.locator('a:has-text("Maintenance")');
  36  |         this.lnkClaim = page.locator('a:has-text("Claim")');
  37  |         this.lnkBuzz = page.locator('a:has-text("Buzz")');
  38  |         this.txtSearchbox = page.locator('input[placeholder="Search"]');
  39  |      
  40  |     }
  41  | 
  42  |     // Actions
  43  |     // Check if HomePage exists
  44  |     async isHomePageExists(){
  45  |         let title:string = await this.page.title();
  46  |         if(title)
  47  |         {
  48  |             return true;
  49  |         }
  50  |         return false;
  51  |     }
  52  | 
  53  |     // Enter search text in the search box
  54  |     async enterSearchText(pText: string){
  55  |         try {
  56  |             await this.txtSearchbox.fill(pText);
  57  |         } catch (error) {
  58  |             console.log(`Exception occurred while entering search text: ${error}`);
  59  |             throw error;
  60  |         }
  61  |     }
  62  | 
  63  | 
  64  | 
  65  |     // Click "Admin" link
  66  |     async clickAdmin(){
  67  |         try {
  68  |             await this.lnkAdmin.click();
  69  |         } catch (error) {
  70  |             console.log(`Exception occurred while clicking 'Admin': ${error}`);
  71  |             throw error;
  72  |         }
  73  |     }
  74  | 
  75  |     // Click "PIM" link
  76  |     async clickPIM(){
  77  |         try {
> 78  |             await this.lnkPIM.click();
      |                               ^ Error: locator.click: Error: strict mode violation: locator(':text-is("PIM")') resolved to 2 elements:
  79  |         } catch (error) {
  80  |             console.log(`Exception occurred while clicking 'PIM': ${error}`);
  81  |             throw error;
  82  |         }
  83  |     }
  84  | 
  85  |     // Click "Leave" link
  86  |     async clickLeave(){
  87  |         try {
  88  |             await this.lnkLeave.click();
  89  |         } catch (error) {
  90  |             console.log(`Exception occurred while clicking 'Leave': ${error}`);
  91  |             throw error;
  92  |         }
  93  |     }
  94  | 
  95  |     // Click "Time" link
  96  |     async clickTime(){
  97  |         try {
  98  |             await this.lnkTime.click();
  99  |         } catch (error) {
  100 |             console.log(`Exception occurred while clicking 'Time': ${error}`);
  101 |             throw error;
  102 |         }
  103 |     }
  104 | 
  105 |     // Click "Recruitment" link
  106 |     async clickRecruitment(){
  107 |         try {
  108 |             await this.lnkRecruitment.click();
  109 |         } catch (error) {
  110 |             console.log(`Exception occurred while clicking 'Recruitment': ${error}`);
  111 |             throw error;
  112 |         }
  113 |     }
  114 | 
  115 |     // Click "My Info" link
  116 |     async clickMyInfo(){
  117 |         try {
  118 |             await this.lnkMyInfo.click();
  119 |         } catch (error) {
  120 |             console.log(`Exception occurred while clicking 'My Info': ${error}`);
  121 |             throw error;
  122 |         }
  123 |     }
  124 | 
  125 |     // Click "Performance" link
  126 |     async clickPerformance(){
  127 |         try {
  128 |             await this.lnkPerformance.click();
  129 |         } catch (error) {
  130 |             console.log(`Exception occurred while clicking 'Performance': ${error}`);
  131 |             throw error;
  132 |         }
  133 |     }
  134 | 
  135 |     // Click "Dashboard" link
  136 |     async clickDashboard(){
  137 |         try {
  138 |             await this.lnkDashboard.click();
  139 |         } catch (error) {
  140 |             console.log(`Exception occurred while clicking 'Dashboard': ${error}`);
  141 |             throw error;
  142 |         }
  143 |     }
  144 | 
  145 |     // Click "Directory" link
  146 |     async clickDirectory(){
  147 |         try {
  148 |             await this.lnkDirectory.click();
  149 |         } catch (error) {
  150 |             console.log(`Exception occurred while clicking 'Directory': ${error}`);
  151 |             throw error;
  152 |         }
  153 |     }   
  154 | 
  155 |     // Click "Maintenance" link         
  156 |     async clickMaintenance(){
  157 |         try {
  158 |             await this.lnkMaintenance.click();
  159 |         } catch (error) {
  160 |             console.log(`Exception occurred while clicking 'Maintenance': ${error}`);
  161 |             throw error;
  162 |         }
  163 |     }
  164 | 
  165 |     // Click "Claim" link
  166 |     async clickClaim(){
  167 |         try {
  168 |             await this.lnkClaim.click();
  169 |         } catch (error) {
  170 |             console.log(`Exception occurred while clicking 'Claim': ${error}`);
  171 |             throw error;
  172 |         }
  173 |     }
  174 | 
  175 |     // Click "Buzz" link
  176 |     async clickBuzz(){
  177 |         try {
  178 |             await this.lnkBuzz.click();
```