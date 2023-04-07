package com.chroma.seleniumClasses;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class CloseAndQuit {
    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://chroma-tech-academy.mexil.it/static_page/");
        driver.findElement(By.xpath("//button[@id='openwindow']")).click();

        Set<String> windows = driver.getWindowHandles();

        for (String window : windows) {
            driver.switchTo().window(window);
        }
        Thread.sleep(2000);

        // closes the current windown
        driver.close();

        // closes all windows
        // driver.quit();

        // default content
        // driver.switchTo().defaultContent();

        // driver.switchTo().window("Chroma Tech Academy");

        Set<String> windowsTwo = driver.getWindowHandles();
        for (String window : windowsTwo) {
            driver.switchTo().window(window);
        }

        driver.findElement(By.xpath("//a[@id='opentab']")).click();

        Thread.sleep(2000);
        driver.quit();

    }
}