import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn : "root"
  }
)//Now this service is available across entire application
export class ServiceClass
{

    firstName : string = "facelift";
    lastName : string = "Surgery";


PrintConsoleMessages()
{
    console.log("Statement coming from constructor in Service class = " +  this.firstName + this.lastName);
    console.log("Messages printing on console due to Service class");
}




}




//@Injectable() this decorator is not required but Angular recommends to do this as dependencies are required in future
export class ColorChangeService
{
    CurrentColor : string = "Green";

    getColor() : string
    {
        return this.CurrentColor;
    }

    TestModuleMethod() // Creating this method to be used in TestModule_SeparateModule from testModule.module.ts file
    {
        console.log("Using this for test module");
    }
}
