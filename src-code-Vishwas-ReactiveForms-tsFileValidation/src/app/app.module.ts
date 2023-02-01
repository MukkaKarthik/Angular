import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HelloProgrammer, HelloProgrammer_BuilderService } from './app.component';

import { DoBootstrap } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloProgrammer,
    HelloProgrammer_BuilderService,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [HelloProgrammer_BuilderService]
})
export class AppModule { }
