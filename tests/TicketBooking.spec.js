import {test, expect} from '@playwright/test'

test('TicketBooking', async({page})=> {

await page.goto("https://ticketnew.com/movies/chennai/seven-screen-s-cinemas-kilambakkam-chennai-c/1102122")
await page.locator("//div[text() = '04:00 PM']").click();
await page.locator("(//span[@id='available-seat'])[34]").click();
await page.locator("//span[text() = 'Proceed']").click();
await page.locator("//input[@placeholder='Enter mobile number']").fill("9791412583");
await page.locator("//button[text()='Continue']").click();



})