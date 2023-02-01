import { Component, Input, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { TransformNames } from './TypeScript files/TransformNames';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-Kudavenkat-YouTube';
}




@Component({
  selector : "Beginner-selector",
  templateUrl : "./HTML files/BeginnerFile1.html"
})
export class ProgrammerBeginning
{
    applicationName : string = "Angular 2";

}







@Component(
  {
    selector : "empDetails-selector",
    template : `<h1> Employee Details </h1>
                 <empComponent-selector></empComponent-selector>`
  }
)
export class EmployeeDetails
{

}



//Applying inline styling and external styling

@Component(
  {
    selector : "empComponent-selector",
    templateUrl : "./HTML files/EmployeeComponent.html",
    styleUrls : ["./CSS files/file1.css"],
  }
)
export class EmployeeComponent
{

  firstName : string = "facebook developer";
  lastName : string = "Bangalore location";
  Gender : string = "Male";
  Age : number = 0;



  //Working on string interpolation

  CompanyName : string = "Company started in India";

  BooleanProperty : boolean = true;


 // ImageAddress : string = "data:image/jpeg;base64,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"




  getFullName() : string
  {
      return this.firstName + " " + this.lastName;
  }


  buttonDisabled : boolean = true;


  canonicalValue : string = 'Studied in Narayana School';


  classBinding_redClass : string = "RedClass";


  ConditionalValidation_classBinding : boolean = true;


  Exclamation_ConditionalValidation_classBinding : boolean = false;


classBinding_redClass_ItalicsClass : string = "RedClass ItalicClass";



  applyClasses()
  {
    let differentClasses =
    {
      boldClass : this.ConditionalValidation_classBinding,
      OrangeClass : true,
      ItalicClass : !this.Exclamation_ConditionalValidation_classBinding

    }

    return differentClasses;


  }




}




//Import pipe class from ts file for Mr and Mrs transformation on the browser

import { InterfaceComponent1 } from './Interface files/InterfaceFile1';
import { ServiceClass } from './TypeScript files/ServiceFile1.service';


@Component(
  {
  selector : "tutorial-selector",
  templateUrl : "./HTML files/TutorialFile1.html",
  styleUrls : ["./CSS files/file1.css"]
  }
)
export class TutorialComponent
{

  PrintConsoleMessages() : void
  {
    console.log("Message is getting printed due to button clicked");
  }

  PrintSecondConsoleMessage() : void {
    console.log("Printing second message");
  }



  ternaryOperator : boolean = true;


  twoWayBinding : string = "Welcome programmer to Langauge";




  JSONObjectArray : InterfaceComponent1[] = [
    {firstName : "facebook" , lastName : "Developer", Location : "Bangalore",Gender : "Male"},
    {firstName : "Google" , lastName : "tester", Location : "Delhi",Gender : "FeMale"},
    {firstName : "Orkut" , lastName : "Operations Team", Location : "Chennai",Gender : "FeMale"},
    {firstName : "Microsoft" , lastName : "Business Team", Location : "Punjab",Gender : "Male"},
    {firstName : "Wipro" , lastName : "Sales Team", Location : "Kashmir",Gender : "FeMale"},

  ]

allCount : number = this.getAllCount();
MaleCount : number = this.getMaleCount();
FemaleCount : number = this.getFemaleCount();


getAllCount() : number
{
  return this.JSONObjectArray.length;
}


getMaleCount() : number
{
  return this.JSONObjectArray.filter((e: { Gender: string; }) => e.Gender === "Male").length;
}

getFemaleCount() : number
{
  return this.JSONObjectArray.filter((e: { Gender: string; }) => e.Gender === "FeMale").length;
}




}








//LifeCycle Hook components

@Component(
  {
    selector : "parent-selector",
    templateUrl : "./HTML files/ParentFile1.html"
  }
)
export class ParentComponent
{

 @Output() parentString : string = "Parent Word";

}



@Component(
  {
    selector : "child-selector",
    templateUrl : "./HTML files/ChildFile1.html"
  }
)
export class ChildComponent
{

 @Input() childString: string = "";

}







//Working on Services in Angular

@Component(
  {
    selector : "services-component",
    templateUrl : "./HTML files/ServiceFile1.html",
    providers : [ServiceClass] // this providers array is necessary , without this , browser will throw an error
  }
)
export class ServicesComponent implements OnInit
{
  InstanceClass;
    constructor(s : ServiceClass)
    {
      console.log("Coming from constructor");
      console.log("Printing from local s variable in constructor");
      s.PrintConsoleMessages();
      this.InstanceClass  =  s;
      console.log("Message coming from instance property in created class");
      this.InstanceClass.PrintConsoleMessages();
    }

    ngOnInit(): void {
      console.log("Coming from ngOnInit");
     this.InstanceClass.PrintConsoleMessages();
    console.log("Executing onInit life cycle hook");
  }

  //ngOnInit is a life cycle hook which gets executed after constructor is executed
  //Service call is issued in ngOnInit for better performance issues



}









//Working on routing navigation


@Component(
  {
    selector : "routing-selector",
    template : `<h3> Welcome to main routing Component </h3> `
  }
)
export class RoutingComponent
{

}




//Services angular injection
import { ColorChangeService } from './TypeScript files/ServiceFile1.service';



@Component(
  {
    selector : "injection-service",
    templateUrl : "./HTML files/InjectionFile1.html",
    providers : [ColorChangeService],
    //above line dependency if not included , browser will throw an error as dependency is not passed from Service class
  }
)
export class InjectionComponent
{

  colorLocalInstance : any = "";

tryingInstance = new ColorChangeService() ; //this variable properties and methods can't be shared to other components

  constructor(public colorRequired : ColorChangeService ) // this way , Service class = ColorChangeService is created as soon as InjectionComponent class is created
  {
      console.log(colorRequired.CurrentColor);

      this.colorLocalInstance = new ColorChangeService();
      // Instance created here in above line 318 colorLocalInstance can't be shared to other components,hence don't use this convention

  }

  set SetColorTo_OriginalClass(value : string)
  {
    this.colorRequired.CurrentColor = value;
  }

  get receiveColor_fromOriginalClass() : string
  {
      return this.colorRequired.getColor();
  }






}
