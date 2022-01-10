Feature: Title of your feature

  Scenario: Title of your scenario face book forgot password
    Given I want to try login facebook
    When I complete action and pass username and password
    Then I validate the outcomes

  Scenario Outline: multiple data passing
    Given I want to try login flipkart
    When user enter <row number> and
    Then I validate the outcome
   

    Examples: 
      | row number |
      |          1 |      
      |          2 |   
      |          3 |   
