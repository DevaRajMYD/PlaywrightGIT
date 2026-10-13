import {test, expect} from "@playwright/test"

//Frame Handling ----> Frame handling is the process of interacting with elements that are present inside an iframe.

//Single Frame

test ('SingleFrame', async ({page}) => {

await page.goto ("https://demo.automationtesting.in");                               // ------> Home Page URL

await page.locator('//button[@id="btn2"]').click();                                 // ------> click Skip Signin

await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html")    // ------> After skip, URL check

await page.locator("//a[text() = 'SwitchTo']").click()                            // -----> Click SwitchTo option in the UI page

await page.locator("//a[text() = 'Frames']").click();                             //  ------> Click Frame from Dropdown

// Handling Single iFrame

const SingleFrame = await page.frameLocator("//iframe[@id='singleframe']");
await SingleFrame.locator("//input[@type='text']").fill("Hi Devaraj Welcome to FrameHandling");


})


//Handle Multi Frames

test ('MultiFrame', async ({page}) => {

await page.goto ("https://demo.automationtesting.in");                                   // ------> Home Page URL

await page.locator('//button[@id="btn2"]').click();                                     // ------> click Skip Signin

await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html")        // ------> After skip URL check

await page.locator("//a[text() = 'SwitchTo']").click()                                // -----> Click SwitchTo option in the page

await page.locator("//a[text() = 'Frames']").click(); 

//Multi iFrames

await page.locator('//a[@href="#Multiple"]').click();  // click iframe with an iframe tap in UI

//HAndle MultiFrames
await page.frameLocator("//iframe[@src='MultipleFrames.html']")  // ----> frameLocator 1st iframe
.frameLocator("//iframe[@src='SingleFrame.html']")               // ----> frameLocator 2nd iframe
.locator("//input[@type='text']")                              // ----> text box page locator
.fill("MultiFrame Handling");

})