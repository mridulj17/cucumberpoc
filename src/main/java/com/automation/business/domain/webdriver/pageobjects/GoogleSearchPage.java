package com.automation.business.domain.webdriver.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by stealth17 on 6/27/17.
 */
public class GoogleSearchPage extends AbstractPage<GoogleSearchPage> {

    @FindBy(css="#rso > div:nth-child(1) > div > div > div > div > h3 > a")
    private WebElement firstLink;
    private WebDriverWait wait;

    public GoogleSearchPage(WebDriver driver){

        super(driver);
        wait = new WebDriverWait(driver, 10);
    }

    public GoogleSearchPage navigateToURL(String url) {
        driver.get(url);
        return this;
    }

    public String getTextFromFirstLink(){
        firstLink = wait.until(ExpectedConditions.visibilityOf(firstLink));
        return firstLink.getText();
    }

}