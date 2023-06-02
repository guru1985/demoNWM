Feature: Login to https://www.saucedemo.com
Scenario: Open the Demo page
  Given I open the Demo page
  Then the title is {title}

Example:
|title|
|Swag Labs|
