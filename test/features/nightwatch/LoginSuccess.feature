Feature: Login Successfully

Scenario: Login Successfully
  Given I open the Demo page
  When I give username as "standard_user" 
  And password as "secret_sauce"
  And Click on login
  Then I should be able to login to the website and see title "Products"
