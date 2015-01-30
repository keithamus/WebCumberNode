Feature: Do a Google Search
  Using a web browser
  I want to perform a Google search

  Scenario: Google Search
    Given I visit http://google.com
    When I enter 'pizzas' into 'gbqfq'
    Then I should see search results

  Scenario: Google Search
    Given I visit http://google.com
    When I enter 'hamburgers' into 'gbqfq' (chainable version)
    Then I should see search results (chainable version)
