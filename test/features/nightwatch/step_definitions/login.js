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

  // Then(/^Products should get displayed in ascending order$/, () => {
  //   browser.elements('css selector', LoginElem.Sorting.lowestprice, (results) =>{
  //     console.log(results.gettext(LoginElem.Sorting.lowestprice,function(result1){
  //             this.assert.equal(result1.value, "$7.99");
            
  //           }))
          
      // for(let i=0;i<results.value.length-1;i++){
      //   browser.elementIdText(results.value[i].ELEMENT, (result1)=>{
      //     browser.elementIdText(results.value[i+1].ELEMENT,(result2)=>{
      //       if(result1.value<result2.value){
      //         console.log("Sorted in ascending Order")
      //         return true
      //       }else{
      //         console.log("Not sorted in ascending Order") 
      //         return false
      //       }

      //     })

      //   })
      // }
  //   })

  // });

  Then(/^Products should get displayed in ascending order$/, () => {
    return browser.getText(LoginElem.Sorting.lowestprice,function(result1){
      this.assert.equal(result1.value, "$7.99");

  })

});

Then(/^I should be able to add the onsie and the Bike Light into the cart$/, () => {
   browser.click(LoginElem.AddtoCart.SaucelabOnsie)
   return browser.click(LoginElem.AddtoCart.SaucelabsBikeLight)
    });

Then(/^Shopping cart should have 2 items$/, () => {
  return browser.getText(LoginElem.AddtoCart.cartItems,function(result1){
    this.assert.equal(result1.value, "2");
    })
  });