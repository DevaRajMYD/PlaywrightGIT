import { test, expect } from "@playwright/test";

test("WebTable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");


// To locate and print the Table
  const printAllData = page.locator("//table[@name='BookTable']");  
  console.log(await printAllData.allTextContents())


// To get Number of rows present in the table

let noRows = page.locator("(//table//tbody//tr)");
console.log("Number of Rows"," : "+ await noRows.count());

//Use filter ----> useful for finding a particular row.
const Filter = noRows.filter({hasText: "Master In JS"})    //Using Filter
console.log(await Filter.innerText())


// locate and print 3rd row in the table with all data

  let rowName = await page
   .locator("(//table//tbody//tr)[3]//td").allTextContents(); // [] value based on lenght not index
  console.log(rowName);
  

//Locate and print 3rd row & 3rd data from the table
 let rowName3 = await page
   .locator("((//table//tbody//tr)[3]//td)[3]").allTextContents(); // [] value based on lenght not index      
  console.log(rowName3);


//Locate and print multi rows data ---> pass the Xpath inside an array  

  let multiRowArray = [
    await page.locator("((//table//tbody//tr)[1]//th)").allTextContents(),  // 1st row --> Header Row data/values
    await page.locator("((//table//tbody//tr)[2]//td)").allTextContents(),  // 2nd row data/values
    await page.locator("((//table//tbody//tr)[3]//td)").allTextContents(),  // 3rd row 
    await page.locator("((//table//tbody//tr)[4]//td)").allTextContents(),  // 4th row ....etc.,
  ];
  console.log(multiRowArray);



//find particular element or data

  console.log(
    await page.locator("((//table//tbody//tr)[7]//td)[3]").allInnerTexts()    //Also we can use ----> .allTextContents()
  );



// Instead first() use  nth() method  ----> Locate particular row using nth(index value) and cell ("//td") using nth(index value)

  let row = page.locator("//table//tbody//tr").nth(6); // in nth() value is index based, not length
  let cell = row.locator("//td").nth(1);
  console.log(await cell.allTextContents());
})
