import {test, expect} from "@playwright/test"

//Frame Handling ----> Frame handling is the process of interacting with elements that are present inside an iframe.

//Single Frame

test ('WindowHandling', async ({page}) => {

await page.goto ("https://demo.automationtesting.in");                               // ------> Home Page URL

await page.locator('//button[@id="btn2"]').click();                                 // ------> click Skip Signin

await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html")    // ------> After skip, URL check

await page.locator("//a[text() = 'SwitchTo']").click()                            // -----> Click SwitchTo option in the UI page

await page.locator('//a[text()="Windows"]').click();                             // ---> select window from dropdown


// Provide listener to store event while window handling
// const newEvent = page.waitForEvent('popup');

// await page.locator("//button[text()='    click   ']").click()                    // ---> Click "click" button

// const newTap = await newEvent;                                                   // ---> here declare new variable for line 20 ("newEvent") 

// await newTap.locator('//a[@class="nav-link"]').first().click()   //----> click "download" in the new tap, so pass the xpath using "newTap"

//                       ---------------- OR ----------

// Provide listener to store event while window handling - another way to create Listener

const [newTap] = await Promise.all([page.waitForEvent('popup'), page.locator("//button[text()='    click   ']").click() ])

await newTap.locator('//a[@class="nav-link"]').first().click()


}) 


//Code for MultiWindow Handling ---> need to find multiWindow optional website to run this code

test.only('Multi Window Handling', async ({context}) => {
  const mainPage = await context.newPage();
  await mainPage.goto('https://demo.automationtesting.in/Windows.html');
  await mainPage.locator('//a[@href="#Multiple"]').click()

  const pages = [];
  context.on('page', newPage => {pages.push(newPage)})

  await mainPage.locator('//button[@onclick="multiwindow()"]').click()
  console.log(pages.length);
  await pages[0].locator('//input[@id="email"]').fill('xyz');
});


