Feature: home page

Scenario: Pricing button in the header
    Given User is on the main page
    When User clicks on Pricing button in the header
    Then User sees title Pricing

Scenario: Products button in the header
    Given User is on the main page
    When User clicks on Products button in the header
    Then User sees that title Products changes colour from white to green

Scenario: Solutions button in the header
    Given User is on the main page
    When User clicks on Solutions button in the header
    And Modal with all solutions is displayed and visible
    And User clicks on See all solutions link at the bottom of modal
    Then User is redirected to Solutions page

Scenario: Information section navigation
    Given User is on the main page
    When User scrolls to Need more information section
    And User clicks on title of any article
    Then User is redirected to the page of selected article and sees selected article title

Scenario: Footer / links
    Given User is on the main page
    When User scrolls to the footer
    And User selects any link in the footer by clicking on it
    Then User is redirected to the appropriate page and sees the title of the page that matches to the chosen link