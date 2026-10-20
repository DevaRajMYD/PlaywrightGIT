export class SearchHotelPage {
    constructor(page) {
        this.page = page;
        this.location = page.locator("//select[@id='location']");
        this.hotels = page.locator("//select[@id='hotels']");
        this.roomType = page.locator("//select[@id='room_type']");
        this.rooms = page.locator("//select[@id='room_nos']");
        this.checkInDate = page.locator("//input[@id='datepick_in']");
        this.checkOutDate = page.locator("//input[@id='datepick_out']");
        this.adultRoom = page.locator("//select[@id='adult_room']");
        this.childRoom = page.locator("//select[@id='child_room']");
        this.buttonSearch = page.locator("//input[@id='Submit']");
        // this.buttonReset = page.locator('//input[@id="Reset"]')
    }

    async selectLocation(locationByIndex) {
        await this.location.selectOption({ index: locationByIndex });
    }

    async selectHotel(hotelLabel) {
        await this.hotels.selectOption({ label: hotelLabel });
    }
 
    async selectRoomType(roomTypeIndex) {
        await this.roomType.selectOption({ index: roomTypeIndex });
    }

    async selectRoomNos(roomNosIndex) {
        await this.rooms.selectOption({ index: roomNosIndex });
    }

    async inDate(fillInDate) {
        await this.checkInDate.fill(fillInDate);
    }

    async OutDate(fillOutDate) {
        await this.checkOutDate.fill(fillOutDate);
    }

    async selectAdultRoom(adultRoomIndex) {
        await this.adultRoom.selectOption({ index: adultRoomIndex });
    }

    async selectChildRoom(childRoomIndex) {
        await this.childRoom.selectOption({ index: childRoomIndex });
    }

    async search() {
        await this.buttonSearch.click();
    }
    // async reset(){
    //     await this.buttonReset.click();
    // }
}