/*
package com.automation.business.cucumber.stepdefinitions;

import com.automation.business.domain.webdriver.pageobjects.GoogleHomePage;
import com.automation.business.domain.webdriver.pageobjects.GoogleSearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertEquals;

*/
/**
 * Created by stealth17 on 6/27/17.
 *//*

public class SearchStepDefinition {

    @Autowired
    private GoogleHomePage googleHomePage;
    @Autowired
    private GoogleSearchPage googleSearchPage;

    @Given("^I am on the HomePage$")
    public void I_am_on_the_HomePage() {
        assertEquals(googleHomePage.getCurrentUrl(),
                     "https://wwww.google.com");
    }

    @When("^I type in the text (.*)$")
    public void I_type_in_the_text(String text) {
        googleHomePage.enterTextInSearchField(text);

    }

    @And("^click on the search button$")
    public void click_on_the_search_button() {
        googleHomePage.clickOnGoogleSearchButton();
    }

    @Then("^the first link should contain the result (.*)$")
    public void the_first_link_should_contain_the_result(String result) {
        assertEquals(googleSearchPage.getTextFromFirstLink(), result);
    }
}

*/