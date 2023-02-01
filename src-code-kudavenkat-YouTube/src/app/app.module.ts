import { NgModule,Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent, ProgrammerBeginning, EmployeeDetails , EmployeeComponent , TutorialComponent,
  ParentComponent , ChildComponent , ServicesComponent , RoutingComponent ,
  InjectionComponent



} from './app.component';

import { TransformNames } from './TypeScript files/TransformNames';

import { RouterModule, Routes } from '@angular/router';
import { SimpleComponentComponent } from './Routing files/simple-component/simple-component.component';
import { ComplexComponentRouterComponent } from './Routing files/complex-component-router/complex-component-router.component';
import { PageNotFoundRouterComponent } from './Routing files/page-not-found-router/page-not-found-router.component';
import { SampleComponent, TestModule_SeparateModule } from './testModule.module';
import { ColorChangeService, ServiceClass } from './TypeScript files/ServiceFile1.service';

@NgModule({


  declarations: [
    AppComponent,
    ProgrammerBeginning ,
    EmployeeDetails , EmployeeComponent, TutorialComponent, TransformNames , ParentComponent , ChildComponent , ServicesComponent ,
     SimpleComponentComponent, ComplexComponentRouterComponent, PageNotFoundRouterComponent , SampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, TestModule_SeparateModule

  ],
  providers: [],
  bootstrap: [SampleComponent]
})
export class AppModule { }



