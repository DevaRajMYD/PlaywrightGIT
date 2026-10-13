import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { SearchHotelPage } from "../Page/SearchHotelPage";

test("Adactin", async ({ page }) => {
    // login
    const loginAdactin = new LoginPage(page);
    await loginAdactin.launchBaseURL();
    await loginAdactin.enterUserName("Deva1988");
    await loginAdactin.enterPassword("Deva@88");
    await loginAdactin.clickLoginButton();

    //search Hotels
    const searchAdactin = new SearchHotelPage(page);
    await searchAdactin.selectLocation(2);
    await searchAdactin.selectHotel("Hotel Cornice");
    await searchAdactin.selectRoomType(2);
    await searchAdactin.selectRoomNos(2);
    await searchAdactin.inDate("06/10/2026");
    await searchAdactin.OutDate("08/10/2026");
    await searchAdactin.selectAdultRoom(3);
    await searchAdactin.selectChildRoom(1);
    await searchAdactin.search();
});