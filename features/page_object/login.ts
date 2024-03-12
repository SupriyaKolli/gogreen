import { WebDriver, By,until} from 'selenium-webdriver';
import { AbstractPageObject } from './AbstractPageObject';
import { driver } from '../support/hook';

export class login extends AbstractPageObject
{
private vegitable = By.xpath("//div[@class='products']//div[1]//div[3]//button[1]");
private cart = By.xpath("//img[@alt='Cart']");
private cout = By.xpath("//button[normalize-space()='PROCEED TO CHECKOUT']");
// private order = By.cssSelector("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(14)");
// private country = By.xpath("//div[@class='wrapperTwo']//div//select");
// private terms = By.xpath("//input[@type='checkbox']");
// private proceed = By.xpath("//button[normalize-space()='Proceed']");

constructor() {
         super(driver);
     }

open = () =>
{
    const url:string = "https://rahulshettyacademy.com/seleniumPractise/#/";
    this.driver.get(url);
}

selectvegitable = async()=>
{
    await this.driver.findElement(this.vegitable).click();
}

clickcart = async()=>
{
   const c1 = this.driver.findElement(this.cart);
   await this.driver.wait(until.elementIsVisible(c1), 5000);
       return c1.click();
}

checkout = async()=>
{
    const c2 = this.driver.findElement(this.cout);
    await this.driver.wait(until.elementIsVisible(c2), 5000);
    return c2.click();
}

// placeorder = async()=>
// {
//      const c = this.driver.findElement(this.order);
//      await this.driver.wait(until.elementIsVisible(c), 3000);
//      return c.click();
// }
}