Feature: Solutions page

Scenario: Filtering on Solutions page
    Given User is on Solutions page
    When User clicks on  See use cases button
    And User clicks on Filter by button
    And User selects any option from dropdown menu
    And User clicks on Close filter icon
    Then User sees that button text changes to '1 filter selected'

Scenario: Use cases navigation on Solutions page
    Given User is on Solutions page
    When User clicks on  'See use cases' button
    And User chooses any use case by clicking on 'See use case' link at the bottom of use case card
    Then User is redirected to Account notifications page and sees title 'Account notifications'