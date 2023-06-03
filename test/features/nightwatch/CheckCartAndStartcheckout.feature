Feature: Check Items in the cart and checkout

Scenario: Check if added items are displaying in the cart and start checkout
  Given I open the Demo page
  When I give username as "standard_user" 
  And password as "secret_sauce"
  And Click on login
  Then I should be able to login to the website and see title "Products"
  And I should be able to add the onsie and the Bike Light into the cart
  And Shopping cart should have 2 items
  And I should be able to click the cart and see its items
  And I should be able to click checkout
  And I should be able to enter Checkout information and Continue

