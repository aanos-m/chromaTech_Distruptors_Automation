package com.chroma.seleniumClasses;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class RadioButtons {

    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://chroma-tech-academy.mexil.it/static_page/");

        // same would apply if it was radioButton1 or radioButton2
        WebElement radioButton1 = driver.findElement(By.xpath("(//input[@name='radioButton'])[1]"));
        radioButton1.click();

        Thread.sleep(3000);

        WebElement radioButton2 = driver.findElement(By.xpath("(//input[@name='radioButton'])[2]"));
        radioButton2.click();

        Thread.sleep(3000);

        WebElement radioButton3 = driver.findElement(By.xpath("(//input[@name='radioButton'])[3]"));
        radioButton3.click();
    }
}
