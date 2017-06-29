package com.automation.spring.configuration;

import com.automation.business.domain.webdriver.pageobjects.GoogleHomePage;
import com.automation.business.domain.webdriver.pageobjects.GoogleSearchPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by stealth17 on 6/27/17.
 */
@Configuration
public class DefaultConfiguration {

    @Bean
    public WebDriver createDriver(){
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        return new ChromeDriver();
    }

    @Bean
    public GoogleHomePage createGoogleHomePage(WebDriver driver){
        return new GoogleHomePage(driver);
    }

    @Bean
    public GoogleSearchPage createGoogleSearchPage(WebDriver driver){
        return new GoogleSearchPage(driver);
    }
}
