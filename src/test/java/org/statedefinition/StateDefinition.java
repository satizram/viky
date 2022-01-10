package org.statedefinition;



import java.awt.Desktop.Action;
import java.io.IOException;

import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.Fbpojo;

import coco.Baseclass;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class StateDefinition extends Baseclass {
	

@Given("I want to try login facebook")
public void i_want_to_try_login_facebook() {
	openBrowser();
urlid("https://www.facebook.com/");

}

@When("I complete action and pass username and password")
public void i_complete_action_and_pass_username_and_password() throws IOException {
Fbpojo po= new Fbpojo();
WebElement use = po.getMail();
String user = excelRead("C:\\Users\\satramam\\Eclip\\coco\\Excel\\RFDS Tracker_12072021.xlsx", "Sheet1", 1, 0);
sendkey(use, user);
WebElement pass = po.getPass();
String password = excelRead("C:\\Users\\satramam\\Eclip\\coco\\Excel\\RFDS Tracker_12072021.xlsx", "Sheet1", 1, 1);
sendkey(pass, password);
 WebElement login = po.getLogin();
 cli(login);
 
}

@Then("I validate the outcomes")
public void i_validate_the_outcomes() {
driver.close();	
	
}
@Given("I want to try login flipkart")
public void i_want_to_try_login_flipkart() {
	System.out.println("flipkart login");
}





@When("user enter {int}")
public void user_enter(Integer int1) throws IOException {

openBrowser();
urlid("https://www.flipkart.com/");
	WebElement user = driver.findElement(By.xpath("(//input[@type='text'])[2]"));
	WebElement pass = driver.findElement(By.xpath("//input[@type='password']"));
	String mail = excelRead("C:\\Users\\satramam\\Eclip\\coco\\Excel\\RFDS Tracker_12072021.xlsx", "Sheet1", int1, 0);
	String password = excelRead("C:\\Users\\satramam\\Eclip\\coco\\Excel\\RFDS Tracker_12072021.xlsx", "Sheet1", int1, 1);
sendkey(user, mail);
sendkey(pass, password);
WebElement login = driver.findElement(By.xpath("(//button[@type='submit'])[2]"));
cli(login);

}
@Then("I validate the outcome")
public void i_validate_the_outcome() {
	System.out.println("flipkart end");
	driver.close();
}

}
