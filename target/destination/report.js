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
  "name": "I type in the text \u003ctext\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result \u003cresult\u003e",
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
  "matchedColumns": [
    0
  ],
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
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.i_am_on_the_HomePage()"
});
formatter.result({
  "duration": 1087388530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 19
    }
  ],
  "location": "SearchStepDefinition.i_type_in_the_text(String)"
});
formatter.result({
  "duration": 288943241,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.click_on_the_search_button()"
});
formatter.result({
  "duration": 83224893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java.com: Java + You",
      "offset": 41
    }
  ],
  "location": "SearchStepDefinition.the_first_link_should_contain_the_result(String)"
});
formatter.result({
  "duration": 744521396,
  "status": "passed"
});
formatter.uri("/home/stealth17/IdeaProjects/cucumberpoc2/src/main/resources/features/search2.feature");
formatter.feature({
  "line": 1,
  "name": "Search google for other languages",
  "description": "",
  "id": "search-google-for-other-languages",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-other-languages;perform-google-search-based-on-the-data",
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
  "name": "I type in the text \u003ctext\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;",
  "rows": [
    {
      "cells": [
        "text",
        "result"
      ],
      "line": 9,
      "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;1"
    },
    {
      "cells": [
        "python",
        "Welcome to Python.org"
      ],
      "line": 10,
      "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;2"
    },
    {
      "cells": [
        "angularjs",
        "AngularJS — Superheroic JavaScript MVW Framework"
      ],
      "line": 11,
      "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;3"
    },
    {
      "cells": [
        "ruby",
        "Download Ruby - Ruby Programming Language"
      ],
      "line": 12,
      "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;2",
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
  "name": "I type in the text python",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result Welcome to Python.org",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.i_am_on_the_HomePage()"
});
formatter.result({
  "duration": 248531201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "python",
      "offset": 19
    }
  ],
  "location": "SearchStepDefinition.i_type_in_the_text(String)"
});
formatter.result({
  "duration": 561467267,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.click_on_the_search_button()"
});
formatter.result({
  "duration": 58041987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to Python.org",
      "offset": 41
    }
  ],
  "location": "SearchStepDefinition.the_first_link_should_contain_the_result(String)"
});
formatter.result({
  "duration": 700191082,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;3",
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
  "name": "I type in the text angularjs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result AngularJS — Superheroic JavaScript MVW Framework",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.i_am_on_the_HomePage()"
});
formatter.result({
  "duration": 217109608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "angularjs",
      "offset": 19
    }
  ],
  "location": "SearchStepDefinition.i_type_in_the_text(String)"
});
formatter.result({
  "duration": 539272394,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.click_on_the_search_button()"
});
formatter.result({
  "duration": 54597631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AngularJS — Superheroic JavaScript MVW Framework",
      "offset": 41
    }
  ],
  "location": "SearchStepDefinition.the_first_link_should_contain_the_result(String)"
});
formatter.result({
  "duration": 653785748,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Perform google search based on the data",
  "description": "",
  "id": "search-google-for-other-languages;perform-google-search-based-on-the-data;;4",
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
  "name": "I type in the text ruby",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click on the search button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the first link should contain the result Download Ruby - Ruby Programming Language",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.i_am_on_the_HomePage()"
});
formatter.result({
  "duration": 205388839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ruby",
      "offset": 19
    }
  ],
  "location": "SearchStepDefinition.i_type_in_the_text(String)"
});
formatter.result({
  "duration": 391815428,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.click_on_the_search_button()"
});
formatter.result({
  "duration": 64382078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Download Ruby - Ruby Programming Language",
      "offset": 41
    }
  ],
  "location": "SearchStepDefinition.the_first_link_should_contain_the_result(String)"
});
formatter.result({
  "duration": 1100315615,
  "status": "passed"
});
});