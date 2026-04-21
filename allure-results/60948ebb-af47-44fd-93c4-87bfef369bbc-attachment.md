# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test_PIM.spec.ts >> PIMTest
- Location: tests\Test_PIM.spec.ts:51:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator(':text("-- Select --")').first()
    - locator resolved to <div tabindex="0" clear="false" data-v-67d2aedf="" class="oxd-select-text-input">-- Select --</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c286b6e5="" class="oxd-topbar-header-title">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-navigation">…</div> subtree intercepts pointer events
  3 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c286b6e5="" class="oxd-topbar-header-title">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-navigation">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c286b6e5="" class="oxd-topbar-header-title">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-navigation">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { LoginPage } from './LoginPage';
  3  | 
  4  | 
  5  | export class LogoutPage {
  6  |     //Declare Vasriables
  7  |     readonly page: Page;
  8  |     private readonly dropdownbtn: Locator;
  9  |     private readonly lnkLogout: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 |         this.dropdownbtn = page.locator(".oxd-userdropdown-name");
  14 |         this.lnkLogout = page.locator(".oxd-userdropdown-link:has-text('Logout')");
  15 |     }
  16 | 
  17 |     //Actions
  18 | 
  19 |     async Logout(): Promise<LoginPage> {
> 20 |         await this.dropdownbtn.click();
     |                                ^ Error: locator.click: Target page, context or browser has been closed
  21 |         await this.lnkLogout.click();
  22 |         return new LoginPage(this.page);
  23 |     }
  24 | 
  25 | }
```