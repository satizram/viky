$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/file.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario face book forgot password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to try login facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StateDefinition.i_want_to_try_login_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I complete action and pass username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StateDefinition.i_complete_action_and_pass_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "StateDefinition.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "multiple data passing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to try login flipkart",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003crow number\u003e and",
  "keyword": "When "
});
formatter.step({
  "name": "I validate the outcome",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "row number"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "multiple data passing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to try login flipkart",
  "keyword": "Given "
});
formatter.match({
  "location": "StateDefinition.i_want_to_try_login_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter 1 and",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcome",
  "keyword": "Then "
});
formatter.match({
  "location": "StateDefinition.i_validate_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "multiple data passing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to try login flipkart",
  "keyword": "Given "
});
formatter.match({
  "location": "StateDefinition.i_want_to_try_login_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter 2 and",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcome",
  "keyword": "Then "
});
formatter.match({
  "location": "StateDefinition.i_validate_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "multiple data passing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to try login flipkart",
  "keyword": "Given "
});
formatter.match({
  "location": "StateDefinition.i_want_to_try_login_flipkart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter 3 and",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I validate the outcome",
  "keyword": "Then "
});
formatter.match({
  "location": "StateDefinition.i_validate_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
});