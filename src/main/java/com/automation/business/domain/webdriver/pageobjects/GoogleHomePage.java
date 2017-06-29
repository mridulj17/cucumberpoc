package com.automation.business.domain.webdriver.pageobjects;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by stealth17 on 6/27/17.
 */
public class GoogleHomePage extends AbstractPage<GoogleHomePage> {

    @FindBy(id = "hplogo")
    private WebElement googleLogoImg;

    @FindBy(name = "q")
    private WebElement searchFld;

    @FindBy(name = "btnK")
    private WebElement googleSearchBtn;

    ////ToDo - find a way later
    private WebElement imFeelingLuckyBtn;

    public GoogleHomePage(WebDriver driver) {
        super(driver);
    }

    public GoogleHomePage navigateToURL(String url) {
        driver.get(url);
        return this;
    }

    public GoogleHomePage enterTextInSearchField(String text) throws InterruptedException {
        searchFld.clear();
        searchFld.sendKeys(text);
        searchFld.sendKeys(Keys.ENTER);
        return this;
    }

    public GoogleHomePage clickOnGoogleSearchButton() {
        ///TODO-fix later
        //googleSearchBtn.click();
        searchFld.sendKeys(Keys.ENTER);
        return this;
    }

}
