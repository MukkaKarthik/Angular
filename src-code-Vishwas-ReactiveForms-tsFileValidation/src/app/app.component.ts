import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrossValidation } from './Custom Validations/userName.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-YouTube-ReactiveForms-tsFileValidation';
}








//Working on form controls

@Component(
  {
    selector : "programmer-selector",
    templateUrl : "./HTML files/ValidationFile1.html",

  }
)
export class HelloProgrammer
{
  //Working on form groups and form controls

    formGroup_Variable = new FormGroup(
    {
      userName : new FormControl("default value = facebook developer"),
      password : new FormControl("password typed in back end"),
      conformPassword : new FormControl("please change password"),

      address : new FormGroup(
        {
            State : new FormControl("Delhi Union Territory"),
            City : new FormControl("Bangalore"),
            Area_PinCode : new FormControl("Global Village Tech Park - 3455"),
        }
      )
    }


      );




      loadAPIData_onButtonClick()
    {
      //Note :- While setting values , properties structure should be same as model , otherwise it won't work , tried without complete model , not working
      this.formGroup_Variable.setValue(
        {
          userName : "userName = Set value function",
          password: "hello world",
          conformPassword : "Confirming hello world",


          address : {

            State : "State = Set value function",
          City : "City = Set value function",
          Area_PinCode : "PinCOde = Set value function"

          }

        }
      );

      console.log(this.formGroup_Variable);

//          SetValue() is very strict in maintaining the form group , we have to pass all control values ,
// If we want to update few values , then use patchValue() method
//
    }


    loadFewControlValues()
    {
      this.formGroup_Variable.patchValue(
        {
          userName : "userName = Patch value function",
          password: "patch value password ",
          conformPassword : "Patch value Confirming password",

        }


      );

      console.log(this.formGroup_Variable);

    }


}










 //WOrking on form builders

@Component(
  {
    selector : "helloBuilder-selector",
    templateUrl : "./HTML files/BuilderServiceFile2.html"
  }
)
export  class HelloProgrammer_BuilderService
{


  constructor(private registrationForm : FormBuilder)
  {

  }

  public formGroup_Variable : any = this.registrationForm.group(
    {
      userName : ["Initially facebook",[Validators.required]],
      password : ["later Microsoft",[Validators.required]],//here we are specify all validation rules inside nested array
      conformPassword : "",

      address : this.registrationForm.group(
        {
          State : "form Builder state",
          City : "form Builder city",
          Area_PinCode : "form Builder area PinCode"


        }
      ),


    },{validator : CrossValidation}

  );

   UserName_shortForm = this.formGroup_Variable.get('userName');

}






