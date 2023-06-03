Feature: End To End checkout

Scenario: Final Checkout
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
  And I should be able to verify the checkout information page title "Checkout: Overview"
  And I should be able to see the items added
  And I should be able to see the "Payment Information"
  And value "SauceCard #31337"
  And I should be able to see the "Shipping Information"
  And value "Free Pony Express Delivery!"
  And I should be able to see the "Price Total"
  And value "SubTotal"
  And value "Tax"
  And value "Total"
  And I should be able to Finish the checkout
