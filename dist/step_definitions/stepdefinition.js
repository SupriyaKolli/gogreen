"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const login_1 = require("../page_object/login");
let loginpage = new login_1.login();
(0, cucumber_1.Given)('User opens URL {string}', async function (string) {
    loginpage = new login_1.login();
    await loginpage.open();
});
(0, cucumber_1.When)('the user adds the vegetable to the cart', async function () {
    await loginpage.selectvegitable();
});
(0, cucumber_1.When)('clicks on the cart', async function () {
    await loginpage.clickcart();
});
(0, cucumber_1.When)('proceeds to checkout', async function () {
    await loginpage.checkout();
});
//          When('places the order', async function ()
//           {
//             await loginpage.placeorder();
//          });
