"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const AbstractPageObject_1 = require("./AbstractPageObject");
const hook_1 = require("../support/hook");
class login extends AbstractPageObject_1.AbstractPageObject {
    vegitable = selenium_webdriver_1.By.xpath("//div[@class='products']//div[1]//div[3]//button[1]");
    cart = selenium_webdriver_1.By.xpath("//img[@alt='Cart']");
    cout = selenium_webdriver_1.By.xpath("//button[normalize-space()='PROCEED TO CHECKOUT']");
    // private order = By.cssSelector("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(14)");
    // private country = By.xpath("//div[@class='wrapperTwo']//div//select");
    // private terms = By.xpath("//input[@type='checkbox']");
    // private proceed = By.xpath("//button[normalize-space()='Proceed']");
    constructor() {
        super(hook_1.driver);
    }
    open = () => {
        const url = "https://rahulshettyacademy.com/seleniumPractise/#/";
        this.driver.get(url);
    };
    selectvegitable = async () => {
        await this.driver.findElement(this.vegitable).click();
    };
    clickcart = async () => {
        const c1 = this.driver.findElement(this.cart);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(c1), 5000);
        return c1.click();
    };
    checkout = async () => {
        const c2 = this.driver.findElement(this.cout);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(c2), 5000);
        return c2.click();
    };
}
exports.login = login;
