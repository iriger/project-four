Feature: 'Messaging API pricing' page

Scenario: 'Messaging API pricing' page / 'Pay as you go' section
    Given User in on the Messaging API pricing page
    When User scrolls to 'Pay as you go' section
    And User selects 'Toll-Free' sender type tab by clicking on it
    Then User sees that 'Service' table for 'Toll-Free' type is displayed

Scenario: 'Messaging API pricing' page / country selection
    Given User in on the Messaging API pricing page
    When User clicks on 'Country' button
    And User chooses any country from the dropdown menu by clicking on it
    Then Selected country is displayed on 'Country' button

Scenario: 'Messaging API pricing' page / FAQ selection
    Given User in on the Messaging API pricing page
    When User scrolls to FAQ section
    And User clicks on any question
    Then User sees the answer on this question