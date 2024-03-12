Feature: Vegetable Shopping

  @smoke
  Scenario: Purchase Vegetables
    Given User opens URL "https://rahulshettyacademy.com/seleniumPractise/#/"
    When the user adds the vegetable to the cart
    And clicks on the cart
    And proceeds to checkout
