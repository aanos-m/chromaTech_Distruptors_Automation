package com.chroma.seleniumClasses;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
// import org.openqa.selenium.support.ui.Select;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StaticDropDown {
    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://chroma-tech-academy.mexil.it/static_page/");

        // Select dropDown = new Select(driver.findElement(By.xpath("//select[@name='dropdown-class-example']")));

        // dropDown.selectByIndex(1);
        // dropDown.selectByValue("option3");
        // dropDown.selectByVisibleText("Option1");

        // driver.findElement(By.xpath("//button[normalize-space()='Dropdown
        // button']")).click();
        // driver.findElement(By.partialLinkText("Action")).click();

        List<WebElement> options = driver.findElements(By.xpath("/html/body/div[1]/div[3]/div[1]/div/a"));

        for (WebElement option : options) {
            if (option.getText().contentEquals("Action")) {
                option.click();
                break;
            }
        }
    }
}