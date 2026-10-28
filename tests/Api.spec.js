import { test, expect, request } from '@playwright/test'
import PostData from '../Data_Api/Post.json'   //here "PostData" is given name by ourself and '../Data_Api/Post.json' is path in the structure left side
import TokenData from '../Data_Api/Token.json'  // same as "PostData"
import PutData from '../Data_Api/Put.json'      // same as "PostData"

var B_Id = ""           // might be "B_Id" is used in all tests so it is declared in "var" out of the scope 
var BearerToken = ""    // same as B_Id
test.describe.serial('Serial Tests', async () => {     // using "test.describe.serial" we can run all tests serially inside it.

  // GET Method - To fetch the data

  test('Get booking id', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    const body = await response.json();

    //Assertion using "expect"

    const status = response.status();
    console.log(status);
    await expect(status).toEqual(200);
    console.log(body);
  });

  test('Get booking details', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/10');
    const body = await response.json();
    console.log(body);
  });


  // Create Booking ID ----> POST Method

  test('Create Booking details', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: PostData           //that given name ("PostDta") in import used here as a value and here "data" as a key and it's declared as our own
    });
    const body = await response.json();
    console.log(body);

    //Handle dynamic ID

    B_Id = body.bookingid;  //here B_Id is declared with var initially because of to use globally

    console.log(`Booking ID is: ${B_Id}`);                      //Template literals used `xxxxx`=${yyy}
    await expect(response.status()).toBe(200);
  });

  // Create Token ----> POST Method

  test('Create Token', async ({ request }) => {
    const response = await request.post("https://restful-booker.herokuapp.com/auth", {   // in URL "auth" instead of "booking"
      data: TokenData
    })
    const body = await response.json();

    //handle token dyanamically ---> //here BearerToken is declared with var initially because of to use globally

    BearerToken = await body.token    // here "token" is a key getting in response in the body/terminal

    console.log('Generated Bearer Token is:', BearerToken)
    console.log(body)

  })

  // Update Bokking Details ---> PUT Method

  test("Update Booking details", async ({ request }) => {

    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${B_Id}`, {      //Template literals used `xxxxx=${yyy}` , `-->Backtics used
      headers: {
        "Content-Type": "application/json",
        "cookie": `token=${BearerToken}`           //Template literals used `xxxxx=${yyy}` , `-->Backtics used
      },

      data: PutData

    })
    const body = await response.json();
    console.log(body)

  })

})
