package com.chroma.seleniumClasses;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Wait {
    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        // implicit wait aka global wait -- works sometimes 
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));

        driver.get("https://chroma-tech-academy.mexil.it/static_page/");

        // do not use Thread.sleep
        // Thread.sleep(8000);

        //Explicit Wait
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//input[@placeholder='Type to Select Countries']"))));
        driver.findElement(By.xpath("//input[@placeholder='Type to Select Countries']")).sendKeys("United States");

    }
}