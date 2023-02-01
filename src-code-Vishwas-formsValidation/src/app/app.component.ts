import { Component,} from '@angular/core';
import { UserModel } from './Model';


import { EnrollmentService } from './Service files/enrollment.service';




 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-Vishwas-formsValidation';
}
 



@Component(
  {
    selector : "form1-selector",
    templateUrl : "./HTML files/file1.html"
  }
)
export class Form1Component
{


firstName : string = "Microsoft";
lastName : string = "Developer";
location : string = "Bangalore";

age : number = 23;

DoesCompanyExist : boolean = true;



public userModel_variable : UserModel = new UserModel("facebook developer","345287","gmail.com");


public name_value : string = "Google Developer";

public SchoolName : string = "Concept School";



differentTopics : any = ["Biology","Maths","Social","English","Physics"];

constructor(private er_service : EnrollmentService)
{

};



onSubmitting()
{
 // console.log(this.userModel_variable);
  //console.log(this.differentTopics);


  this.er_service.PostData_toServer(this.userModel_variable).subscribe(
    (    data: any)=> console.log("Message Successfully delivered",data),
    (error : any) => console.log("Message failed to deliver", error),
  );
}

}