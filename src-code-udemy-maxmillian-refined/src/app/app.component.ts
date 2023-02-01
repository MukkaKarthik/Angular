import { Component, ComponentFactoryResolver, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { IngredientModel } from 'src/server/component models only ts files/Ingredient Model';
import { RecipeModel } from 'src/server/component models only ts files/Recipe Model Project';
import { ShoppingModel } from 'src/server/component models only ts files/Shopping Model';
import { directiveComponent, renderDirective } from 'src/server/Directive files/simpleComponent.directive';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ServiceLogging_ServiceComponent } from 'src/server/Service files/LoggingService.service';
import { RecipeService } from 'src/server/Service files/RecipeService.service';
import { ShoppingList } from 'src/server/Service files/ShoppingList.service';
import { InjectService } from 'src/server/Service files/InjectIntoAnother.service';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Learning Academy Refined';
}




//Creating component using CLI by typing a specific command

@Component({
  selector: 'app-cli-component',
  templateUrl: '../server/HTML files/Non routing HTML files/CLIComponent.html',

})
export class CliComponent
{

}









//we should inform typescript that this component is a special component , hence we use decorators
//Decorators enhance the class to special components

//Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

//This decorator will parse the class to convert into javascript file

//selector should be unique



@Component(
  {

      selector : "app-server",

      templateUrl : "../server/HTML files/Non routing HTML files/serverComponent.html",
         styleUrls : ["../server/CSS files/serverComponent.css"] // this is used for external styling

         //below is used for internal styling
          /* styles : [`.secondaryClass
              {
                  border : 3px solid yellow
              }`

              ]     */
})
export class serverComponent1
{

}












//Shopping component list starts here
//these all come under shopping cart project



@Component({
  selector : "shopping-component",
  templateUrl : "../server/HTML files/Non routing HTML files/shoppingComponent.html",

})
export class ShoppingComponent
{

  shoppingArray : ShoppingModel[] = [
      new ShoppingModel("tennis","shirts","Carrot"),
      new ShoppingModel("cricket","pants","Cucumber"),
      new ShoppingModel("Ferrari Racing","suits","Potato")
  ];
}






@Component(
  {
      selector : "priceDetails-component",
      templateUrl : "../server/HTML files/Non routing HTML files/priceDetails.html",

  }
)
export class PriceDetailsComponent
{
  recipes : RecipeModel[] = [
      new RecipeModel("Microsoft laptop","Started in 1990's","https://media.istockphoto.com/photos/microsoft-headquarters-in-bucharest-romania-picture-id1184908397?k=20&m=1184908397&s=612x612&w=0&h=i7B2Luk-rFlXdxmzDWv8YZANRjGk8ruw3QjbwMi2ORg=")


  ];



}







@Component({
  selector : "otherComponents-component",
  templateUrl : "../server/HTML files/Non routing HTML files/otherComponents.html",
  styleUrls : ["../server/CSS files/styles.css"]

})
export class OtherComponents
{
      // writing ingredient component code

      ingredientArray : IngredientModel[] = [
          new IngredientModel("Counter Strike", 2300),
          new IngredientModel("Half life", 2500),
          new IngredientModel("Samsung Galaxy S20",4000),
          new IngredientModel("One plus 7 pro",5000),
      ];



}









@Component(
  {
      selector : "customProperties-selector",
      templateUrl : "../server/HTML files/Non routing HTML files/Custom Properties.html"
  }
)
export class CustomPropertiesClass
{

  customObject = [
      {
          CompanyType : "software",
          CompanyLocation : "Bangalore",
          CompanyAge : 25,
          CompanyExists : true,
      }
      ,
      {
        CompanyType : "Hardware",
        CompanyLocation : "Gujarat",
        CompanyAge : 34,
        CompanyExists : true,
    }
  ];


onBluePrintAddition(serverDataReceived :
  {
      serverName_Company : string ,
       serverContent_Location : string,
       serverAge_Company : number,
      serverCompany_exists : boolean}

  )
{
  this.customObject.push(
      {
          CompanyType : serverDataReceived.serverName_Company,
          CompanyLocation : serverDataReceived.serverContent_Location,
          CompanyAge : serverDataReceived.serverAge_Company,
          CompanyExists : serverDataReceived.serverCompany_exists
      }
  );
}



}






@Component(
  {
      selector : "customProperties_parent-selector",
      templateUrl : "../server/HTML files/Non routing HTML files/Custom Properties.html"
  }
)
export class CustomProperties_parent
{


  newCompanyCreated = "";
  newLocationCreated = "";
  newAgeCreated : number = 0;
  newBooleanCreated : boolean = true;

  constructor()
  {

  }


   BluePrintAddition = new EventEmitter<{
      serverName_Company : string ,
       serverContent_Location : string,
       serverAge_Company : number,
      serverCompany_exists : boolean


}>();

onBluePrintClick()
{
  this.BluePrintAddition.emit(
      {

          serverName_Company : this.newCompanyCreated,
          serverContent_Location : this.newLocationCreated,
          serverAge_Company : this.newAgeCreated,
          serverCompany_exists : this.newBooleanCreated


      }
  );

}
}












//Working on structural directives


@Component(
  {
    selector : "structuralDirectives-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/StructuralFile1.html",
    providers : [directiveComponent,renderDirective]
  }
)
export class StructuralDirectives
{

  ArrayPrint : any = [1,2,3,4,5,6,7];

  WelcomeString : any = [];

  constructor( temp : directiveComponent )
  {
    this.WelcomeString = temp.printConsoleMessages();

  }

  ngSwitchValue : number =  45;


}












//Working on dependency injection

@Component(
  {
    selector : "dependencyInjection-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/dependencyInjection.html",
    providers : [ServiceLogging_ServiceComponent]
  }
)
export class DependencyInjection
{

 constructor(temp : ServiceLogging_ServiceComponent)
 {
    temp.LogConsole();
    console.log("Company situated in "  +  temp.stringValue);

    console.log("printing details without addition");
    temp.provideDetails();



    temp.addJSONObject();
    console.log("Printing details after pushing DataStorage object stored within Service");
    temp.provideDetails();



    temp.addViaMethod("Delhi , added via external source","India added via external source");
    temp.addJSONObject();
    console.log("Printing details after adding via an external source");
    temp.provideDetails();

}

}













@Component(
  {
    selector : "recipeComponent-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/RecipeService.html",
    providers : [RecipeService]
  }
)
export class RecipeServiceComponent implements OnInit
{

  recipeArray :  any = [];
  RecipeServiceClass_imported : any = [];

  RenderAnyFunction : any = [];

   completeLocalInstance : any = new RecipeService();

  constructor(recipeTemp : RecipeService)
  {

    console.log(recipeTemp.getRecipeList());

    recipeTemp.addRecipe("adding new item ");
    console.log(recipeTemp.addRecipe("added recipe on "));

    recipeTemp.removeRecipe();
    console.log(recipeTemp.getRecipeList());

    recipeTemp.removeRecipe();
    console.log(recipeTemp.getRecipeList());

    this.RenderAnyFunction = recipeTemp.getRecipeList; //this will display the function

    this.RecipeServiceClass_imported = recipeTemp.getRecipeList(); // this way we will get function results


  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   console.log("implementing ngOnInit method");
  }

  onSelected()
  {
  console.log("implementation onSelected method");
  }


}










//Injecting one service into another


@Component(
  {
    selector : "shoppingEdit-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/ShoppingList.html",
    providers : [ShoppingList,InjectService]
  }
)
export class ShoppingEdit_Component
{

  localInstance : any = [];

  constructor(private shop : ShoppingList , otherService : InjectService)
  {

    console.log(shop.getShoppingList());


    //Pushing string value
    shop.addShoppingList_StringValue("Pushing string");
    console.log(shop.getShoppingList());


    //Pushing object directly

    shop.addShoppingList_JSONValue_directPush("location =  Bangalore,direct push key","Bangalore = direct push key");
    console.log(shop.getShoppingList());



    //Pushing object indirectly

    shop.addShoppingList_IndirectPush("indirect push = location key ", "indirect push value");
    console.log(shop.getShoppingList());

    shop.remove_LastItem();
    console.log(shop.getShoppingList());



    this.localInstance = otherService.getBranches();



    //Pushing combined JSON objects :-

    otherService.Push_destructedJSONObject();

    console.log(otherService.getBranches());


  }


}









//Working on router navigation

@Component(
  {
    selector : "routingNavigation-selector",
    templateUrl : "../server/HTML files/Routing HTML files/BasicRouting.html",
    styleUrls : ["../server/CSS files/styleNavigation.css"],
   // encapsulation : ViewEncapsulation.None
   // encapsulation : ViewEncapsulation.Native this works on Shadow DOM , by doing this only this component receives styling but not all

   encapsulation : ViewEncapsulation.Emulated
  }
)
export class RoutingNavigation
{

  //Navigating programmatically

RouterNavigation : any = [];


constructor(temp : Router)
{

  this.RouterNavigation = temp;

}


onButtonClick_LoadPath()
{
  this.RouterNavigation.navigate(['./educationComponentURL']);
}


}










//Local References


@Component(
  {
    selector : "reference-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/reference.html"
  }
)
export class LocalReference
{

  ConsoleReferenceHTMLElement(received_refValue : any)
  {
      console.log(received_refValue);
  }


  ConsoleReferenceValue(val : HTMLInputElement)
  {
    console.log(val.value); // we get input element value on console
  }




  @ViewChild("inputElementRef_decorator")
  inputContent_UsingDecorator!: ElementRef;

  //By doing this way we are getting more enhanced properties of an HTML element by using decorators , taking HTML element and performing some manipulations


  consoleDecoratorElement()
  {
    console.log(this.inputContent_UsingDecorator);
    console.log(this.inputContent_UsingDecorator.nativeElement);
    console.log(this.inputContent_UsingDecorator.nativeElement.value);
  }


}












//Working on life cycle hooks


@Component(
  {
    selector : "lifecycle-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/LifeCycle.html"
  }
)
export class Lifecycle implements OnInit,OnChanges
{

elementString : string = "JavaScript";

    constructor()
    {
      console.log("constructor called");
    }


    ngOnInit() {
      console.log("ngOnInit method called ");
    }

    ngOnChanges(changes: SimpleChanges) : void
     {
    console.log(changes);
    }


    Change_propertyValue()
    {
      this.elementString = "Property value changed due to button click";
      console.log(this.elementString);
      console.log("elementString property in class Lifestyle has been changed");
    }



    JSONObject : any = [
      "facebook developer" ,
      "Google Developer",
      24,
      false,
      {fullName : "Course changed" , Branch : "Mechanical Engineering"},

    ]


    ArrayElements : any = ["nothing added as of now"];



    addElements_toArray(differentValues : any)
    {

      console.log(differentValues);

      this.ArrayElements.push(differentValues.value);


    }

}









// Working on observables

import { interval } from 'rxjs';
import { CustomPipes } from 'src/server/component models only ts files/CustomPipeComponent.pipe';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component(
  {
    selector : "observe-selector",
    template : `<h3> Welcome to observables component </h3>`
  }
)
export class observablesComponent
{

  ConsoleVariable : number = 0;

  constructor()
  {

  }


/*
  //placing this code in comments because it keeps counting and never stops
  ngOnInit()
  {
    let a : number = 0;
    interval(1000).subscribe(function(countValue)
    {
      a = countValue;

        console.log("Present count = " + countValue);
 //By doing this way we are occupying a lot of unnecessary memory and at a certain point of time memory will run out of resources

 //hence we need to store values in a subscription variable , the reason we do this is because we can destroy that property


    });
  }
 */



}











//Working on forms

//Template driven Angular forms


@Component(
  {
    selector : "AngularForms-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/AngularForms.html"
  }
)
export class AngularForms_templateDriven
{


  submitButton(NameString : HTMLInputElement , mailString : HTMLInputElement ,
    BranchesString : HTMLSelectElement, formTemp : HTMLFormElement , formObject_local : NgForm)
  {
    //Displaying name HTML element in console
    console.log(NameString);
    console.log(NameString.value);

    //Displaying mail address HTML element in console
    console.log(mailString);
    console.log(mailString.value);

    //Displaying branches select HTML element in console
    console.log(BranchesString);
    console.log(BranchesString.value);

    //Displaying complete form element
    console.log(formTemp);
    console.log(formTemp.value);

    //Displaying ngForm object
    console.log(formObject_local);

  }



  //ngForm reference also works with decorators in the following way

  //ngForm reference also works with decorators in the following way



  @ViewChild("formElement") decorator_form!: NgForm;

  PoppingUp_email : string = "facebook@developer.com"


  twoWay_binding : string = "twoBinding@gmail.com , two way binding"

  ClickDecorator()
  {
    console.log(this.decorator_form);
    //this is other way of getting access to the form without submitting the form
  }






  //Working on radio buttons handling

  RadioButton_Gender : string[] = ["Male","female",'others'];

  RadioButtonClicked(inputElement : NgForm)
  {
    console.log(inputElement)
  }





  // Displaying personal details

 //feeding from front end to back end
  personDetails : any =
  {
    fullName_JSONObject : "",
    location_JSONObject : "",
    Age_JSONObject : 0

  }

  onSubmitPersonalDetails(formElement : HTMLFormElement)
  {

    this.personDetails.fullName_JSONObject = formElement.fullName_ref.value
    this.personDetails.location_JSONObject = formElement.location_ref.value
    this.personDetails.Age_JSONObject = formElement.Age_ref.value


    console.log("After submitting personal details");
    console.log(this.personDetails);


  }





  //feeding from back end to front end

  BackEnd_object : any =
  {
    fullName_backend : "BackEnd = facebook",
    location_backend : "BackEnd = Bangalore",
    Age_backend : 34
  }


 /*  onSubmitBackEnd(BackEndElement : HTMLFormElement)
  {
    BackEndElement.fullName_ref.value =  this.BackEnd_object.fullName_backend
  } */




}








//reactive driven angular forms

@Component(
  {
    selector : "reactiveForm-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/ReactiveAngularForm.html"
  }
)
export class ReactiveAngular implements OnInit
{

  CompleteForm! : FormGroup // ! is used to inform typescript that this not null


  SetValues_form! : FormGroup;

  Project_Assignment! : FormGroup // using this for assignment purpose

  gender : string[] = ["Male","female"];


  ngOnInit(): void
  {
    this.CompleteForm = new FormGroup(
      {
        fullName : new FormControl("Initial value = google developer", Validators.required), //Inspect element and check for ng-valid and ng-invalid hot they change
        EmailAddress : new FormControl("Initial Value = google@facebook.com",[Validators.required , Validators.email]),
        Gender_formControl : new FormControl(this.gender[0]),
        SchoolDetails : new FormGroup(
          {
            userName_school : new FormControl("Delhi Public school"),
          },

        ),


      }
    );



    //Below will set the values programmatically
    this.SetValues_form = new FormGroup(
      {
        userName : new FormControl(),
        Password : new FormControl(),
        LoggedIn : new FormControl()
      }
    )


    this.SetValues_form.setValue(
      {
        userName : "setting facebook as UserName",
        Password : "setting hello as Password",
        LoggedIn : true


      }
    );

    //Same method this.SetValues_form.setValue we can use patchValue method




    //Working on assignment for below property

    this.Project_Assignment = new FormGroup(
      {
        ProjectName : new FormControl("Assignment practice"),
        EmailAddress : new FormControl(null,Validators.required),
        HomeAddress : new FormControl("Bangalore,Tech Park",Validators.required),
      }
    )

  }






  Console_SetDetails()
  {
    console.log(this.SetValues_form);
  }

  SubmitDetails()
    {
      console.log(this.CompleteForm);
    }



  ReturnString() : string
  {
    return "hello world"
  }

  ReturnArray() : string[]
  {
      return ["string1", "string2"];
  }


  ReturnObject() : any
  {
    return {"string1" : 'Printing text'}
  }


  ReceiveString_returnObject(strTemp : string , numTemp : number) : {["string1"] : string , ["number1"] : number}
  {
      return {
        string1 : strTemp,
        number1 : numTemp

      }
  }


}








// Working on pipes


@Component(
  {
    selector : "pipes-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/Pipes.html",
  }
)
export class PipesComponent
{

  fullName : string = "facebook Developer"
  todayDATE : Date = new Date();

  ArrayDetails :  any = ["Bangalore", "facebook",new Date(),23];

  fullName_extendedVersion : string = "facebook Developer google"

   changeValue = new Promise(function(resolveObject,rejectObject)
  {

    setTimeout(
      function()
      {
        resolveObject("State value changed after 9 seconds");
      }
    ),9000
  });

}











// Working on HTTP requests

import {tap}  from 'rxjs/operators';
import { DataStorageHTTP } from 'src/server/Service files/DataStorageHTTP.service';
import { AuthenticationFirebase } from 'src/server/Service files/AuthFirebase.service';
import { UserDetails_fromServer } from 'src/server/component models only ts files/User.model';
import { Store } from '@ngrx/store';
import { SchoolName } from 'src/server/component models only ts files/NgRx store/actionRequired.action';
import { initialState_redux } from 'src/server/component models only ts files/NgRx store/reducerFunction1.reducer';
import { state, style, trigger } from '@angular/animations';


@Component(
  {
    selector : "http-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/HTTPRequest.html"
  }
)
export class HTTPRequestComponent
{


  HTTPService! : HttpClient
  constructor(httpLocal : HttpClient)
  {
      this.HTTPService = httpLocal;
  }

  PostData : any =
  {
    TitleProperty : "",
    ContentProperty : ""
  }


  ErrorMessage = null ;

  SendPost_buttonClicked(reference1 : HTMLInputElement, reference2 : HTMLInputElement)
  {
    this.PostData.TitleProperty = reference1.value;
    this.PostData.ContentProperty = reference2.value;

    console.log(this.PostData);

this.HTTPService.post("https://testingdatabaseangular-default-rtdb.firebaseio.com/PostData.json",this.PostData)
.subscribe(function(responseData)
{
  console.log(responseData);
})


    /* Angular is smart enough to know about the observables , if we don't subscribe to
    observables which wraps HTTP request , it won't send any request as no one is bothered about the response*/


    //posts.json is a segment created in firebase , this is purely a firebase requirement , nut not angular or RestAPI requirement
}


  GetDataProperty_fromFunction : any = "";

  GetPosts_fromFirebase()
  {

    let MultipleParams = new HttpParams();
    MultipleParams = MultipleParams.append("adding","facebook-Developer");
    MultipleParams = MultipleParams.append("subtracting","React-enhancement");


    this.HTTPService.get("https://testingdatabaseangular-default-rtdb.firebaseio.com/PostData.json",{
      headers : new HttpHeaders(
        {
          AddingCustomHeader : "Learning application",

        },

      ),

        //below is for single parameter addition
//params : new HttpParams().set("print", "changing_print_to_Textual_Version"), // this will be added after URL

        //follow below way to add multiple parameters
        params : MultipleParams,

/*         responseType : "text" //If we try to get response type as text format out application breaks , as response type is an object   */



    })
    .subscribe((ReceivePostData_fromFireBase) =>
    {
      this.GetDataProperty_fromFunction = ReceivePostData_fromFireBase

      /* here arrow function is used so that class property can be accessed in this method .
      Since there are nested functions , vanilla Javascript function won't work */

        console.log(ReceivePostData_fromFireBase);
    },
    );
  }


}











// Working on Course Project HTTP

@Component(
  {
    selector : "recipeProject-httpSelector",
    templateUrl : "../server/HTML files/Non routing HTML files/RecipeHTTPproject.html",
    providers : [RecipeService,DataStorageHTTP]
  }
)
export class RecipeProject_HTML implements OnInit
{

  received_differentRecipes : any = "";


  receivedJSONList : any = "";


  SendHTTPService! : HttpClient


 constructor(public hello : RecipeService , public data : DataStorageHTTP)
 {
   this.received_differentRecipes = this.data.helloWorld.getRecipeList();
   this.receivedJSONList = this.data.helloWorld.getJSONList();
 }

 ngOnInit(): void
 {
    console.log(this.data.helloWorld.getRecipeList());  // this is 2 way injecting service

    console.log(this.received_differentRecipes);
    console.log(this.receivedJSONList);


 }


}









//Working on authentication

@Component(
  {
    selector : "authentication-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/Authentication.html",
    providers : [AuthenticationFirebase]
  }
)
export class authenticationComponent
{

  isLoggedIn : boolean = true ;

  httpClient! : HttpClient ;
  AuthService_FromConstructor! : AuthenticationFirebase


  CountryCapitals : any =
  {

    India : "Delhi",
    Denmark : "Copenhagen",
    Pakistan : "Islamabad",
    UK : "London",
    USA : "Washington",
    NordicCountries : ["Finland","Norway","Switzerland"],
    MiddleEastCountries : [
      {NuclearWeapons : "Dubai"},
      {Fuel : "UAE"},
      {Missiles : "Iran"}
    ]


  }


  RandomEmailAddress : string = "facebookGoogle@developer.com";
  RandomPassword : string = "reallyHelpfulFromBangalore";


  ValidJSONObject  =
  {
      Given_EmailAddress : "",
      Given_Password : ""
  }


  constructor(clientService : HttpClient, authService_fromService : AuthenticationFirebase)
  {
    this.httpClient = clientService;
    this.AuthService_FromConstructor = authService_fromService;


  }


  SwitchLogMode()
  {
    this.isLoggedIn = !this.isLoggedIn;
  }


  PrintReferenceValue_PostDetailsToFireBase(referEmail : HTMLInputElement , referPassword : HTMLInputElement)
  {

   this.ValidJSONObject.Given_EmailAddress = referEmail.value;
   this.ValidJSONObject.Given_Password = referPassword.value;

      console.log(referEmail.value);
      console.log(referPassword.value);

      console.log(this.ValidJSONObject);

      this.httpClient.post("https://recipe-project-udemy-default-rtdb.firebaseio.com/ValidJSONObject.json",this.ValidJSONObject).subscribe(function(eventObject)
      {
        console.log(eventObject);
      })

  }


  SendCountryDetails()
  {
      console.log(this.CountryCapitals);

      this.httpClient.post("https://recipe-project-udemy-default-rtdb.firebaseio.com/CountryCapitals.json",this.CountryCapitals).subscribe(function(CountryCapitalsObject)
      {
        console.log(CountryCapitalsObject);
      })


  }


  randomMethod()
  {

    console.log("executing random method");

  }


  RandomJSONObject : any =
  {
    propertyRandom :this.randomMethod()
  }

  RandomBooleanValue : boolean = false;



  SendJSONDetails_APIKey()
  {
    this.AuthService_FromConstructor.SignUpMethod(this.RandomEmailAddress, this.RandomPassword);
  }


  StoreDetails_localStorage()
  {
    this.AuthService_FromConstructor.StoreDetails_inBrowser();
  }




}






//Working on loading spinners

@Component(
  {
    selector : "loadSpinner-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/Spinner.html",
    styleUrls : ["../server/CSS files/LoadSpinner.css"],
    providers : []
  }
)
export class LoadSpinnerComponent
{




}




//Generate components dynamically

@Component(
  {
    selector : 'dynamic-selector',
    templateUrl : "../server/HTML files/Non routing HTML files/DynamicComponent.html"
  }
)
export class dynamicComponent
{


  booleanValue : boolean = true;

  getDirectiveExposed : any = "";



}








// Working on alertComponent


@Component(
  {
    selector : "alertComponent-selector",
    template : ` {{message}} `
  }
)
export class alertComponent
{

  message : string = "generate programmatically";

}
function dynamicDirective(dynamicDirective: any) {
  throw new Error('Function not implemented.');
}








// working on lazy loading component

@Component(
  {
    selector : "lazyLoading-selector",
    template : ` <h3> Welcome to lazy loading component </h3> `
  }
)
export class LazyLoadingComponent
{

}







// Working on redux angular implementation


// below component code is not working , don't waste much time on this , see google for codes , there are many available

@Component(
  {
    selector : "reduxAngular-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/ReduxAngularFile1.html"
  }
)
export class ReduxAngularComponent
{


  applicationStore : Store

  constructor(tempStore : Store<{reducerFunctionObject1 : {
    initialState_redux :{fullName : "",
    collegeName : "",
    schoolName : ""}
  }}>)
  {
    this.applicationStore = tempStore;

  }




  DispatchRequiredAction()
  {
    this.applicationStore.dispatch(new SchoolName());
    console.log(initialState_redux);
  }


}



@Component(
  {
    selector : "animations-selector",
    templateUrl : "../server/HTML files/Non routing HTML files/Animations.html",

  }
)
export class AnimationsComponent
{
  planeMessage : string = "We are flying tomorrow";


  httpService! :HttpClient


  booleanValue : boolean = true;

  changeMessageAccordingly()
  {
    this.booleanValue ? this.planeMessage = "state changed to true" : this.planeMessage = "state changed to false";
  }

  constructor(tempHTTP : HttpClient)
  {
    this.httpService = tempHTTP;

  }


  getJSONPosts()
  {
    this.httpService.get("https://jsonplaceholder.typicode.com/users/3").subscribe(function(eventJSON)
    {
      console.log(eventJSON);
    });
  }



}







// Working on web component


import { createCustomElement } from '@angular/elements';

@Component(
  {
    selector : "WebComponent-selector",
    template : ` <h3> This is web component </h3>
    <h3> Goodbye , albideu all the best </h3>
    <br>
    {{addNewMessage}} `,
    styles : [`

h3{
      background-color : red;
      color : white;
    }`

  ]
  }
)
export class WebComponent
{

  @Input() addNewMessage : string = "";


}















