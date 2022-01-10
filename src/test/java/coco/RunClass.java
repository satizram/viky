package coco;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\feature" ,glue="org.statedefinition",dryRun= false
,monochrome=true,strict=false,plugin= {"pretty","junit: src\\output.xml","html:src\\index.html"})

public class RunClass {

}
