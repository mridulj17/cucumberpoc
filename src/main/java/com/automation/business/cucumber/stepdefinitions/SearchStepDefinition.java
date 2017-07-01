package com.automation.business.cucumber.stepdefinitions;

import com.automation.business.domain.webdriver.pageobjects.GoogleHomePage;
import com.automation.business.domain.webdriver.pageobjects.GoogleSearchPage;
import com.automation.spring.configuration.SpringIntegrationTest;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.AfterClass;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertEquals;

/**
 * Created by stealth17 on 6/27/17.
 */
public class SearchStepDefinition extends SpringIntegrationTest {

    @Autowired
    private GoogleHomePage googleHomePage;

    @Autowired
    private GoogleSearchPage googleSearchPage;

    private static final String GOOGLE_URL="https://www.google.com/";

    @Given("^I am on the HomePage$")
    public void i_am_on_the_HomePage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        googleHomePage.navigateToURL(GOOGLE_URL);
        assertEquals(GOOGLE_URL, googleHomePage.getCurrentUrl());
    }

    @When("^I type in the text (.*)")
    public void i_type_in_the_text(String text) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        googleHomePage.enterTextInSearchField(text);
    }

    @And("^click on the search button$")
    public void click_on_the_search_button() throws Throwable {
        googleHomePage.clickOnGoogleSearchButton();
    }

    @Then("^the first link should contain the result (.*)$")
    public void the_first_link_should_contain_the_result(String result) throws Throwable {
        assertEquals(googleSearchPage.getTextFromFirstLink(), result);
    }

    @AfterClass
    public void tearDown(){
        googleSearchPage.closePage();
    }
}
