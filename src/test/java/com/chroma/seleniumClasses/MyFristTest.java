package com.chroma.seleniumClasses;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import io.github.bonigarcia.wdm.WebDriverManager;

public class MyFristTest {
    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://chroma-tech-academy.mexil.it/chroma_real_estate/project_files/login.php");

        driver.findElement(By.name("email")).sendKeys("chroma@chromatech.com");
        driver.findElement(By.name("password")).sendKeys("123456");

        // using xpath with 'contains'
        // syntax == "//tagName[contains(text(), 'textName')]"
        driver.findElement(By.xpath("//button[contains(text(), ' Login')]")).click();

        Thread.sleep(2000);
        String actualPageTitle = driver.getTitle();

        // assertEquals will return the specific value that was supposed to be used if
        // it fails.
        Assert.assertEquals(actualPageTitle, "Agents Panel");

        // assertTrue will return a true or false given the condition
        // Assert.assertTrue(actualPageTitle.contentEquals("Agents Panel"));

        // using getText() to retrieve the text
        String actualHelloText = driver.findElement(By.xpath("//h1[contains(text(), 'Hello, ChromaTech')]")).getText();
        System.out.println(actualHelloText);

        String expectedHelloText = "Hello, ChromaTech";
        Assert.assertEquals(actualHelloText, expectedHelloText);

        Assert.assertTrue(actualHelloText.contentEquals(expectedHelloText));

    }
}
