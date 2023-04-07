package com.chroma.seleniumClasses;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FirstScript {
    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        // maximizes the window to the device's full screen
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();

        driver.get("https://www.amazon.com/");

        // WebElement giftCardsLink = driver.findElement(By.linkText("Gift Cards"));
        try {
            driver.findElement(By.linkText("Gift Cards")).click();
        } catch(org.openqa.selenium.NoSuchElementException e) {
            driver.findElement(By.id("nav-hamburger-menu")).click();
        }
        
        Thread.sleep(2000);

        JavascriptExecutor js = ((JavascriptExecutor)driver);
        // Object.element;
        js.executeScript("arguments[0].scrollIntoView(true);",
                driver.findElement(By.xpath("(//div[@class='hmenu-item hmenu-title '])[4]")));
        
        driver.findElement(By.xpath("(//a[@class='hmenu-item hmenu-compressed-btn'])[2]")).click();
        
        // js.executeScript("arguments[0].scrollIntoView(true);",
        //         driver.findElement(By.xpath("//a[@data-ref-tag='nav_em_1_1_1_45']")));

        js.executeScript("arguments[0].scrollIntoView(true);",
                driver.findElement(By.xpath("(//*[contains(text(), 'Gift Cards')])[3]")));

        driver.findElement(By.xpath("(//*[contains(text(), 'Gift Cards')])[3]")).click();

        driver.findElement(By.xpath("//*[contains(text(), 'All gift cards')]")).click();

        Thread.sleep(3000);
        driver.close();
    }
}
