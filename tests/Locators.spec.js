import {test, expect} from '@playwright/test';

test("Locator", async ({page})=> {

await page.goto("https://www.google.com/");
await expect(page).toHaveURL("https://www.google.com/")
await expect(page).toHaveTitle("Google");
const GoogleSearch = page.locator("//textarea[@class='gLFyf']")   //find and store a locator in a variable
await GoogleSearch.fill("orangehrm");
//print filled text ----> just for reference
const SearchPrint = await GoogleSearch.inputValue();
console.log(SearchPrint);

//click GoogleSearch Button
await page.locator("//input[@value='Google Search']").first().click()

})



//using OrangeHRM website
test("LoginLogoutCheckOrangeHRM", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page).toHaveTitle("OrangeHRM");
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//fill & click to login using userName & password

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();

//verify Home Page - OrangeHRM

const DashboardTitle = page.locator("//span[@class = 'oxd-topbar-header-breadcrumb']");
await expect(DashboardTitle).toBeVisible();
console.log(await DashboardTitle.innerText());   // used to Print the UI text

//check Logout OrangeHRM and Verify Back to Login Page

await page.locator("//span[@class='oxd-userdropdown-tab']").click()
await page.locator("(//a[@class='oxd-userdropdown-link'])[4]").click()

await expect(page).toHaveTitle("OrangeHRM");
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})



//Negative scenario ----> input correct userName and incorrect password

test("incorrectCredential", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page).toHaveTitle("OrangeHRM");
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//fill & click to login using userName & password

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("Deva321");  //------> Incorrect Password
await page.locator("//button[@type='submit']").click();

// Locate error message
const errorMsg = page.locator("//p[text()='Invalid credentials']")
// Print error message
console.log('Error Message:', await errorMsg.textContent());  //-------> used to print error msg text

// Validate error message
await expect(errorMsg).toBeVisible();
await expect(errorMsg).toHaveText('Invalid credentials');

})

