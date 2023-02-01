import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CliComponent, Lifecycle } from "src/app/app.component";


  export const appRoute : Routes = [
    // { path : "**" , redirectTo : "/LifeCycleRoute"  } 
    {
        path : "LifeCycleRoute" , component : Lifecycle ,
    },
    {
        path : "BasicCLIComponentRoute" , component : CliComponent ,
    }
] 


@NgModule(
    {
        imports : [RouterModule.forRoot(appRoute)],
        exports: [RouterModule]
    }

)
export class AllRoutes
{

} 




/*   Note :- need not place component names mentioned in the routes under bootstrap in main module ,
  it is working this way , put AllRoutes under imports as it is a module and TestingModule under declarations as it is a component
 
 Put both TestingModule and AllRoutes in bootstrap array in app.module.ts 
 
  */



@Component(
    {
        selector : "testingModule-selector",
        templateUrl : "../HTML files/Routing HTML files/testingModule.html"
    }
)
export class TestingModule
{

}



