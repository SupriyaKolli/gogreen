import { Given, Then, When } from '@cucumber/cucumber';
import {login} from '../page_object/login';

let loginpage = new login();


         Given('User opens URL {string}', async function (string)
         {
            loginpage = new login();
            await loginpage.open();
         });

         When('the user adds the vegetable to the cart', async function ()
         {
            await loginpage.selectvegitable();
         });

         When('clicks on the cart', async function ()
         {
            await loginpage.clickcart();
         });

         When('proceeds to checkout', async function ()
         {
            await loginpage.checkout();
         });

//          When('places the order', async function ()
//           {
//             await loginpage.placeorder();
//          });