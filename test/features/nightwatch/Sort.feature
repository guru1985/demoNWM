Feature: Sort products in the website

Scenario: Sort price Low to high
  Given I open the Demo page
  When I give username as "standard_user" 
  And password as "secret_sauce"
  And Click on login
  Then I should be able to login to the website and see title "Products"
  And I should be able to sort the products with price low to high
  And Products should get displayed in ascending order
