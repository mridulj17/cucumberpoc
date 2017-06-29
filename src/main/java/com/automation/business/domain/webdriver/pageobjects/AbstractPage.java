package com.automation.business.domain.webdriver.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by stealth17 on 6/27/17.
 */
public abstract class AbstractPage<T> {

    protected WebDriver driver;

    AbstractPage(WebDriver driver){
        this.driver =driver;
        PageFactory.initElements(driver, this);
        driver.manage().window().maximize();
    }

    public abstract T navigateToURL(String url);

    public String getCurrentUrl(){
        return driver.getCurrentUrl();
    }

    public void closePage(){
        driver.close();
        driver.quit();
    }

}
