Feature: Search google for Java
  Scenario Outline: Perform google search based on the data
    Given I am on the HomePage
    When I type in the text java
    And click on the search button
    Then the first link should contain the result java.com: Java + You

    Examples:
      | text | result|
      | java |java.com: Java + You|
