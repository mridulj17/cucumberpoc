Feature: Search google for other languages
  @Final
  Scenario Outline: Perform google search based on the data
    Given I am on the HomePage
    When I type in the text <text>
    And click on the search button
    Then the first link should contain the result <result>

    Examples:
      |text   |result|
      |python |Welcome to Python.org|
      |angularjs |AngularJS — Superheroic JavaScript MVW Framework|
      |ruby   |Download Ruby - Ruby Programming Language|
