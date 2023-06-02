const {Given, Then, When, Before} = require('@cucumber/cucumber');
const LoginElem = require('../../../data/eleLogin');


  Given(/^I open the Demo page$/, () => {
    console.log("Trying to open the browser")
    return browser.url(
      LoginElem.Login.url
        );
  });
  

  Then(/^the title is "([^"]*)"$/, title => {
    browser.waitForElementVisible(LoginElem.Login.title, "Swag Labs title is visible");
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
