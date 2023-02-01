import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { child1 } from 'src/server/Routing Components/childRoute1.component';
import { child2 } from 'src/server/Routing Components/childRoute2.component';
import { CinemaComponent } from 'src/server/Routing Components/Cinema.component';
import { DynamicInject_ParametersIn_URL } from 'src/server/Routing Components/DynamicParameters.component';
import { educationComponent } from 'src/server/Routing Components/Education.component';
import { PageNotFoundComponent } from 'src/server/Routing Components/PageNotFound.component';
import { SportsComponent } from 'src/server/Routing Components/Sports.component';




  export const routes: Routes = [
    {path : "cinemaComponentURL" , component : CinemaComponent},
    {path : "educationComponentURL" , component : educationComponent},
    {path : "SportsComponentURL" , component : SportsComponent},
    {path : "DynamicParameterURLInjection/:id/:nameUnique" , component : DynamicInject_ParametersIn_URL},
    {path : "child1Component" , component : child1},
    {path : "child2Component" , component : child2},
  
  
    //setting up a common route where routes are not defined 
  
    {path : "foundNothing" , component : PageNotFoundComponent},
    {path : "SomethingNotAvailable", redirectTo : "/foundNothing"},
   
 //{path : "**", redirectTo : "/foundNothing"},//wild card route

 //this should be last always as this is a default root which will work for all URL's , if kept at the beginning , then it will work for those routes too where routes are configured



  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes , /* {useHash : true} */ 

 /*  { preloadingStrategy : PreloadAllModules} // by doing this it will load all modules as early as 
 possible to prevent delays , modules which are pre-loaded won't be loaded again if browser is refreshed*/

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* {useHash : true} */ 
/*  This is an old convention of using # in URL's , sometimes few servers don't respond to 404 errors or incorrect URL's ,
 In such cases when # is used , it won't bother about the params passed in URL , it will look for the domain network mentioned prior #
 
 
 Example :- https//localhost:4200///#endRegion , In this example it will look only https//localhost:4200 */


 //These can be used on servers which don't return HTML files as 404 page not found 
 