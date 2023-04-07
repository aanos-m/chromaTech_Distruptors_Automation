package com.chroma.seleniumClasses;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class DropDown {
    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://chroma-tech-academy.mexil.it/static_page/");

        Select dropDown = new Select(driver.findElement(By.id("dropdown-class-example")));

        // dropDown.selectByIndex(2);
        // dropDown.selectByValue("option3");
        dropDown.selectByVisibleText("Option1");

        driver.findElement(By.name("Dropdown button")).click();
    }
}
