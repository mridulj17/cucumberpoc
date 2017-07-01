Feature: Search google for Java
  @Final
  Scenario Outline: Perform google search based on the data
    Given I am on the HomePage
    When I type in the text <text>
    And click on the search button
    Then the first link should contain the result <result>

    Examples:
      |text   |result|
      |javascript |JavaScript|
      |scala |The Scala Programming Language|
