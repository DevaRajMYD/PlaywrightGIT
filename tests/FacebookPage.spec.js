import {test, expect, chromium} from '@playwright/test';

//Create using ==> Browser ---> Context ----> Page
test("Launch", async ()=> {
const Browser = await chromium.launch();
const Context = await Browser.newContext();
const Page = await Context.newPage();

await Page.goto("https://www.facebook.com/");
await expect(Page).toHaveURL("https://www.facebook.com/");

// Get the current URL
    const currentUrl = Page.url();

// Validate URL using conditional statement
    if (currentUrl === "https://www.facebook.com/") {
        console.log('URL validation: PASS');
    } else {
        console.log('URL validation: FAIL');
        console.log('Actual URL:', currentUrl);
    }

await expect(Page).toHaveTitle("Facebook");

//Get the Title
const CurrentTitle = await Page.title();

//Validating the Title using conditional statement
if (CurrentTitle === "Facebook"){
        console.log("Title Validation: PASS");

}else {
        console.log("Title Validation: FAIL");
        console.log("Actual Title:", CurrentTitle);
    }

})



//Using Fixture -----> async ({page}) instead of (Browser--->Context----->Page)


test("LaunchBrowser", async ({page})=> {

await page.goto("https://www.facebook.com/");
await expect(page).toHaveURL("https://www.facebook.com/");

// Get the current URL
    const currentUrl = page.url();

// Validate URL using conditional statement
    if (currentUrl === "https://www.facebook.com/") {
        console.log('URL validation: PASS');
    } else {
        console.log('URL validation: FAIL');
        console.log('Actual URL:', currentUrl);
    }

await expect(page).toHaveTitle("Facebook");

//Get the Title
const CurrentTitle = await page.title();

//Validating the Title using conditional statement
if (CurrentTitle === "Facebook"){
        console.log("Title Validation: PASS");

}else {
        console.log("Title Validation: FAIL");
        console.log("Actual Title:", CurrentTitle);
    }

})