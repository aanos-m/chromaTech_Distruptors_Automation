package com.chroma.seleniumClasses;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Test {
    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));

        driver.get("https://chroma-tech-academy.mexil.it/static_page");

        JavascriptExecutor js = ((JavascriptExecutor) driver);

        js.executeScript("arguments[0].scrollIntoView(true);",
                driver.findElement(By.xpath("//a[normalize-space()='REST API']")));

    }

}
