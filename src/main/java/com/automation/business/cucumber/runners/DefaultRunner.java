package com.automation.business.cucumber.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by stealth17 on 6/27/17.
 */

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/destination"},
        features = {"/home/stealth17/IdeaProjects/cucumberpoc2/src/main/resources/features/search1.feature"
                        ,"/home/stealth17/IdeaProjects/cucumberpoc2/src/main/resources/features/search2.feature"
        },
        glue ={"com.automation.business.cucumber.stepdefinitions"})
public class DefaultRunner {

}
