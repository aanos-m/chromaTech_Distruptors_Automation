package com.chroma.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.chroma.web.WebDriverUtils;

public class LoginPage {
    
    /** USERNAME TEXT BOX */
    @FindBy (xpath = "//input[@id='form-username']")
    public WebElement usernameTextBox;

    /** PASSWORD TEXT BOX */
    @FindBy (xpath = "//input[@id='form-password']")
    public WebElement passwordTextBox;

    /** SING IN BUTTON */
    @FindBy (xpath = "//button[normalize-space()='Sign In']")
    public WebElement signInButton;

    /* CONSTRUCTOR TO INITIALIZE ELEMENTS OF THIS CASE */
    public LoginPage() {
        PageFactory.initElements(WebDriverUtils.driver, this);
    }
}
