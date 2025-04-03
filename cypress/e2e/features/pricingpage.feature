Feature: Pricing page

Scenario: Pricing page content
    Given User in on the Pricing page
    Then Users sees the first section with title Pay as you go with green background colour
    And User sees the second section with title Volume-based pricing with white background colour

Scenario: Pricing page / Benefits section
    Given User in on the Pricing page
    When User scrolls to Enjoy all the benefits sections
    Then User sees three blocks in the section with titles 'Free in-house support', 'Portal access', 'Automatic discounts'

Scenario: Pricing page / Communications section navigation
    Given User in on the Pricing page
    When User scrolls to Communications section
    And User chooses any Communications option by clicking on it
    Then User is redirected to Messaging API page and sees title Messaging API pricing