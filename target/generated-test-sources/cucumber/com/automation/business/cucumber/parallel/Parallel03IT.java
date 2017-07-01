package com.automation.business.cucumber.parallel;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"/home/stealth17/IdeaProjects/cucumberpoc2/src/main/resources/features/search2.feature:12"},
        plugin = {"json:/home/stealth17/IdeaProjects/cucumberpoc2/target/cucumber-parallel/3.json"},
        monochrome = true,
        glue = {"com.automation.business.cucumber.stepdefinitions"})
public class Parallel03IT {
}
