Feature: Add To cart

Scenario: Add 2 items in the cart
  Given I open the Demo page
  When I give username as "standard_user" 
  And password as "secret_sauce"
  And Click on login
  Then I should be able to login to the website and see title "Products"
  And I should be able to sort the products with price low to high
  And I should be able to add the onsie and the Bike Light into the cart
  And Shopping cart should have 2 items


