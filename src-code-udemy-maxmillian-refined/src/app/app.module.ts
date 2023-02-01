import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent , CliComponent, OtherComponents, PriceDetailsComponent, serverComponent1, ShoppingComponent,

   CustomPropertiesClass, CustomProperties_parent, StructuralDirectives,DependencyInjection , RecipeServiceComponent,
  ShoppingEdit_Component,RoutingNavigation, LocalReference, Lifecycle, observablesComponent, AngularForms_templateDriven,

   ReactiveAngular, PipesComponent, HTTPRequestComponent, RecipeProject_HTML, authenticationComponent, LoadSpinnerComponent,
   alertComponent, dynamicComponent, ReduxAngularComponent, AnimationsComponent, WebComponent,

   } from './app.component';



import { child1 } from 'src/server/Routing Components/childRoute1.component';
import { child2 } from 'src/server/Routing Components/childRoute2.component';
import { CinemaComponent } from 'src/server/Routing Components/Cinema.component';
import { DynamicInject_ParametersIn_URL } from 'src/server/Routing Components/DynamicParameters.component';
import { educationComponent } from 'src/server/Routing Components/Education.component';
import { SportsComponent } from 'src/server/Routing Components/Sports.component';
import { PageNotFoundComponent } from 'src/server/Routing Components/PageNotFound.component';
import { AllRoutes, TestingModule } from 'src/server/component models only ts files/SettingUpRouteNgModule.module';
import { CustomPipes } from 'src/server/component models only ts files/CustomPipeComponent.pipe';





// for HTTP requests use this module
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthenticationInterceptor } from 'src/server/Service files/AuthenticationInterceptors.service';
import { LoggingInterceptor } from 'src/server/Service files/LoggingInterceptors.service';
import { dynamicDirective } from 'src/server/Directive files/dynamicComponent.directive';



// importing store from rxjs

import { StoreModule } from '@ngrx/store';
import { reducerFunction1 } from 'src/server/component models only ts files/NgRx store/reducerFunction1.reducer';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [

AppComponent, CliComponent, serverComponent1, ShoppingComponent, PriceDetailsComponent, OtherComponents,
 CustomPropertiesClass, CustomProperties_parent, StructuralDirectives, DependencyInjection, RecipeServiceComponent,
 ShoppingEdit_Component,

 child1,child2,CinemaComponent,DynamicInject_ParametersIn_URL,educationComponent,SportsComponent,PageNotFoundComponent,

RoutingNavigation, Lifecycle, observablesComponent, AngularForms_templateDriven, ReactiveAngular, PipesComponent,
RecipeProject_HTML, authenticationComponent, LoadSpinnerComponent, dynamicComponent, alertComponent,ReduxAngularComponent,


AnimationsComponent,WebComponent,



    //Adding pipes from pipe ts file
    CustomPipes,


    HTTPRequestComponent,


    //This is from from following file  :- SettingUpRouteNgModule.module.ts
    TestingModule,



    //Adding directives components

    dynamicDirective,






  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,

    //this transition will make correct sync with server and client . By doing this we are continuing client state from the state which server rendered , i.e pre-loading of content

    //Importing custom defined module
    AllRoutes ,


    //Used for HTTP sessions
    HttpClientModule,


    // Confidently of store reducers
    StoreModule.forRoot({
      reducerFunctionObject1 : reducerFunction1

      //reducerFunctionObject1 name is up to us
    }),




  ],
  providers: [
   /*  {provide : HTTP_INTERCEPTORS , useClass : AuthenticationInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : LoggingInterceptor, multi : true},
    */
  // by doing this whenever a request URL is sent , it will inject custom defined HTTP service on the request
  ],


  bootstrap: [dynamicComponent,alertComponent]
})
export class AppModule { }
