package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import coco.Baseclass;

public class Fbpojo extends Baseclass {

	public Fbpojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (id="email")
			private WebElement mail;
	@FindBy (id="pass")
	private WebElement pass;
	
	@FindBy(name="login")
	private WebElement login;

	public WebElement getMail() {
		return mail;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLogin() {
		return login;
	}
	
}
