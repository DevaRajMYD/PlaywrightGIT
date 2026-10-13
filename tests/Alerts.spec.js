import {test} from '@playwright/test'


//Types ===> Simple Alert, Confirmation Alert, Prompt Alert

//Simple Alert ----> only OK button in the Alert

test ('SimpleAlert', async ({page}) => {

await page.goto ("https://demo.automationtesting.in/Alerts.html");

//Syntax code for Alert Handling ---> should be before the click action in the test code

 page.once('dialog', async dialog => {
dialog.accept() //------> Handle OK button 
console.log(dialog.message())
console.log(dialog.type())

 } )

await page.locator('//button[@onclick="alertbox()"]').click() 

})




// Confirmation Alert Handling --->  OK or Cancel ----> dialog.accept()  or dialog.dismiss()

test ('ConfirmationAlert', async ({page}) => {

await page.goto ("https://demo.automationtesting.in/Alerts.html");

//Syntax code for Alert Handling 
 page.once('dialog', async dialog => {
dialog.accept() //------> Handle OK button
// dialog.dismiss() //------> Handle Cancel button
console.log(dialog.message())
console.log(dialog.type())
 } )
await page.locator('//a[@href="#CancelTab"]').click()
await page.locator('//button[@onclick="confirmbox()"]').click()

})



//Prompt Based Alert Handling

test ('PromptAlert', async ({page}) => {

await page.goto ("https://demo.automationtesting.in/Alerts.html");
//Syntax code for Alert Handling
 page.once('dialog', async dialog => {
await dialog.accept("Hi Devaraj") //------> in Prompt Alert we can pass the Text in the Prompt box into the .accept("gggggg") or .dismiss("ggggg")
// dialog.dismiss()
console.log(dialog.message())
console.log(dialog.type())
console.log(dialog.defaultValue()) //-----> used to print default text in the Prompt command box
 } )
await page.locator('//a[@href="#Textbox"]').click()
await page.locator('//button[@onclick="promptbox()"]').click()

})


