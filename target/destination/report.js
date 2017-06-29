$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/stealth17/IdeaProjects/cucumberpoc2/src/main/resources/features/search1.feature");
formatter.feature({
  "line": 1,
  "name": "Search google for Java",
  "description": "",
  "id": "search-google-for-java",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-java;perform-google-search-based-on-the-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I type in the text java",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result java.com: Java + You",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-google-for-java;perform-google-search-based-on-the-data;",
  "rows": [
    {
      "cells": [
        "text",
        "result"
      ],
      "line": 9,
      "id": "search-google-for-java;perform-google-search-based-on-the-data;;1"
    },
    {
      "cells": [
        "java",
        "java.com: Java + You"
      ],
      "line": 10,
      "id": "search-google-for-java;perform-google-search-based-on-the-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-java;perform-google-search-based-on-the-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am on the HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I type in the text java",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result java.com: Java + You",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition2.i_am_on_the_HomePage()"
});
formatter.result({
  "duration": 6191754413,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition2.i_type_in_the_text_java()"
});
formatter.result({
  "duration": 219428070,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition2.click_on_the_search_button()"
});
formatter.result({
  "duration": 64962331,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition2.the_first_link_should_contain_the_result_java_com_Java_You()"
});
formatter.result({
  "duration": 1251484084,
  "status": "passed"
});
});