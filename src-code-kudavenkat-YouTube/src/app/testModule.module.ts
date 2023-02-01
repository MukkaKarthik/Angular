import { Component, NgModule } from "@angular/core";
import { ColorChangeService } from "./TypeScript files/ServiceFile1.service";

@NgModule(
    {
       

        providers : [ColorChangeService]
    }
)
export class TestModule_SeparateModule
{

   

    constructor(public tryingTempInstance : ColorChangeService)
    {
        console.log("Color from variable = " + tryingTempInstance.CurrentColor);
        console.log("Color from get method = " + tryingTempInstance.getColor());
    }



    

}

@Component(
    {
        selector : "component-selector",
        template : `<h3> This is coming from sample component </h3>`
    }
)
export class SampleComponent
{

}
