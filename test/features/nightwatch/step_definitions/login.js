const {Given, Then, When, Before} = require('@cucumber/cucumber');
const LoginElem = require('../../../data/eleLogin');


  Given(/^I open the Demo page$/, () => {
    console.log("Trying to open the browser")
    return browser.url(
      LoginElem.Login.url
        );
  });
  

  Then(/^the title is "([^"]*)"$/, title => {
    browser.waitForElementVisible(LoginElem.Login.title, "Swag Labs title is visible", 2000);
    console.log("executing title check");
    return browser.getText(LoginElem.Login.title,function(result){
        this.assert.equal(result.value, title);
        console.log("Title has matched");
      });
  });

  When(/^I give username as "([^"]*)"$/, username =>{
    return browser.setValue(LoginElem.Login.username, username)
  });

  When(/^password as "([^"]*)"$/, password => {
    return browser.setValue(LoginElem.Login.password, password)
  });

  When(/^Click on login$/, ()=> {
    return browser.click(LoginElem.Login.submit)
  });

  Then(/^I should be able to login to the website and see title "([^"]*)"$/, titleProduct => {
    browser.waitForElementVisible(LoginElem.Login.titleProduct, "Product Title is visible")
    return browser.getText(LoginElem.Login.titleProduct,function(result1){
        this.assert.equal(result1.value, titleProduct);
        console.log("Login Successful");
      });
  });

  Then(/^I should be able to sort the products with price low to high$/, () => {
    browser.click(LoginElem.Sorting.sortOptions)
    return browser.click(LoginElem.Sorting.priceHiLo)

  });

  Then(/^Products should get displayed in ascending order$/, () => {
    return browser.getText(LoginElem.Sorting.lowestprice,function(result1){
      this.assert.equal(result1.value, "$7.99");

  })

});

Then(/^I should be able to add the onsie and the Bike Light into the cart$/, () => {
   browser.click(LoginElem.AddtoCart.saucelabOnsieAddToCart)
   return browser.click(LoginElem.AddtoCart.saucelabsBikeLightAddToCart)
    });

Then(/^Shopping cart should have 2 items$/, () => {
  return browser.getText(LoginElem.AddtoCart.cartItems,function(result1){
    this.assert.equal(result1.value, "2");
    })
  });

  Then(/^I should be able to click the cart and see its items$/, ()=>{
    browser.click(LoginElem.StartCheckout.cart)
    browser.assert.elementPresent(LoginElem.AddtoCart.saucelabOnsie, "Onsie is present")
    browser.assert.elementPresent(LoginElem.AddtoCart.saucelabsBikeLight, "Bike Light is present")
    return ("Cart is verified");

  });

  Then(/^I should be able to click checkout$/,()=>{
    browser
      .click(LoginElem.StartCheckout.checkout)
    return ("Checkout Button Clicked");


  });

  Then(/^I should be able to enter Checkout information and Continue$/,()=>{
    browser
      .setValue(LoginElem.StartCheckout.firstName, "Demo")
      .setValue(LoginElem.StartCheckout.lastName, 'NWM')
      .setValue(LoginElem.StartCheckout.zipCode, '07054')
      .click(LoginElem.StartCheckout.continue)
    return ("Checkout Details Entered");


  });

  Then(/^I should be able to verify the checkout information page title "([^"]*)"$/,titleCheckout=>{
    browser.waitForElementVisible(LoginElem.CheckoutInfoAndFinish.titleCheckout, "Checkout Title is visible")
    return browser.getText(LoginElem.CheckoutInfoAndFinish.titleCheckout,function(result){
        this.assert.equal(result.value, titleCheckout);
        console.log("Checkout Overview page opened successfully");
      });
  });

  Then(/^I should be able to see the "([^"]*)"$/,itemLabel=>{
     if(itemLabel=="Payment Information"){
      return browser.getText(LoginElem.CheckoutInfoAndFinish.paymentInfoLabel,function(result){
        this.assert.equal(result.value, itemLabel);
        console.log("Payment Information label is displayed");
      });
     }
    if(itemLabel=="Shipping Information"){
      return browser.getText(LoginElem.CheckoutInfoAndFinish.shippingInfoLabel,function(result){
        this.assert.equal(result.value, itemLabel);
        console.log("Shipping Information label is displayed");
      });
      }
    if(itemLabel=="Price Total"){
      return browser.getText(LoginElem.CheckoutInfoAndFinish.priceTotalLabel,function(result){
        this.assert.equal(result.value, itemLabel);
        console.log("Price total label is displayed");
      });
      }
    });

  Then(/^value "([^"]*)"$/,valueItem=>{
    if(valueItem=="SauceCard #31337"){
      return browser.getText(LoginElem.CheckoutInfoAndFinish.paymentInfoValue,function(result){
        this.assert.equal(result.value, valueItem);
        console.log("Payment Information Value is displayed");
      });
     }
    if(valueItem=="Free Pony Express Delivery!"){
      return browser.getText(LoginElem.CheckoutInfoAndFinish.shippingInfoValue,function(result){
        this.assert.equal(result.value, valueItem);
        console.log("Shipping Information Value is displayed");
      });
    }
    if(valueItem=="SubTotal"){
      
      browser.getText(LoginElem.CheckoutInfoAndFinish.OnsieValue,function(result){
        this.assert.equal(result.value, '$7.99');
        console.log("Onsie Price is " + result.value);
      });
      browser.getText(LoginElem.CheckoutInfoAndFinish.BikeLightprice,function(result1){
        this.assert.equal(result1.value, '$9.99');
        console.log("Bike Light Price is " + result1.value);
      });
      browser.getText(LoginElem.CheckoutInfoAndFinish.priceSummary,function(result2){
        this.assert.equal(result2.value, 'Item total: $17.98');
        console.log("Total Price is " + result2.value);
      });
      return console.log("SubTotal Value is displayed correctly");
    }
    if(valueItem=="Tax"){
      browser.getText(LoginElem.CheckoutInfoAndFinish.taxSummary,function(resultTax){
        this.assert.equal(resultTax.value, 'Tax: $1.44');
            });
      return console.log("Tax infiormation is displayed correctly")
    }
    if(valueItem=="Total"){
      browser.getText(LoginElem.CheckoutInfoAndFinish.total,function(resultTotal){
        this.assert.equal(resultTotal.value, 'Total: $19.42');
            });
      return console.log("Total is displayed correctly")
    }
    
  });

  Then(/^I should be able to Finish the checkout$/,()=>{
    browser
      .click(LoginElem.CheckoutInfoAndFinish.finish)
    return ("Finish Button Clicked");


  });

  Then(/^I should be able to see the items added$/, ()=>{
    browser.assert.elementPresent(LoginElem.AddtoCart.saucelabOnsie, "Onsie is present")
    browser.assert.elementPresent(LoginElem.AddtoCart.saucelabsBikeLight, "Bike Light is present")
    return ("Cart is verified");

  });
