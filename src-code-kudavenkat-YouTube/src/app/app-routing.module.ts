import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleComponentComponent } from './Routing files/simple-component/simple-component.component';
import { ComplexComponentRouterComponent } from './Routing files/complex-component-router/complex-component-router.component';
import {PageNotFoundRouterComponent} from "./Routing files/page-not-found-router/page-not-found-router.component"


export const routes: Routes = [

  {path : "SimpleComponentPage" , component : SimpleComponentComponent},
  {path : "ComplexComponentPage" , component : ComplexComponentRouterComponent },
  {path : "PageNotfoundPage", component : PageNotFoundRouterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
