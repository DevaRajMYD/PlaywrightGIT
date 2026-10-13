import {test, expect} from '@playwright/test'

//Native Dropdown = If we see <select> + <option> in the HTML code, it is a native dropdown.

test("Native Dropdown", async({page})=> {
await page.goto("https://practice.expandtesting.com/dropdown");
await expect(page).toHaveURL("https://practice.expandtesting.com/dropdown");
await expect(page).toHaveTitle("Dropdown menus page for Automation Testing Practice");

const SelectDropDown = page.locator("//select[@id='dropdown']")

await SelectDropDown.selectOption({value: "1"});
await SelectDropDown.selectOption({label:"Option 1"});
await SelectDropDown.selectOption({index: 1});
console.log(await SelectDropDown.inputValue()); 

})


//Custom Dropdown ---> a dropdown that is not created using the HTML <select> tag. It is usually built using <div>, <li>, <span>, <button>, etc.

test("CustomDropdown", async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page).toHaveTitle("OrangeHRM");
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//fill & click to login using userName & password

await page.locator("//input[@name='username']").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button[@type='submit']").click();


// Custom Dropdown ----> check Logout OrangeHRM

await page.locator("//span[@class='oxd-userdropdown-tab']").click()  //in tagName we dont have <select> instead have <span> & <a>, so it's custom Dropdown

//print Logout dropdown text
const PrintText = page.locator("(//a[@class='oxd-userdropdown-link'])[4]");
const text = await PrintText.textContent();
console.log(text);
//click Logout Dropdown
await page.locator("(//a[@class='oxd-userdropdown-link'])[4]").click()


await expect(page).toHaveTitle("OrangeHRM");
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})
