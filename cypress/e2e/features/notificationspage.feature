Feature: Notifications page

Scenario: Navigation on Account notifications page
    Given User is on the Account notifications page
    When User scrolls to 'Products' section
    And User clicks on 'See all products' button
    Then User is redirected to 'Products' page and sees title 'Your one-stop shop for distributed infrastructure.'

Scenario: Navigation to home page
    Given User is on the Account notifications page
    When User clicks on company logo on the right side of the header
    Then User is redirected to the home page