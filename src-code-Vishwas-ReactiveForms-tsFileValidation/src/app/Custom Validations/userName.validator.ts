import { AbstractControl } from "@angular/forms";



//This cross field validator is working as expected
export function CrossValidation(control : AbstractControl) : {[key : string] : boolean } | null
{


    


    let password_var = control.get("password");
    let conformPassword_var = control.get("conformPassword");

    //to validate only after user enters password in password field and confirm password field 

    if(password_var?.pristine || conformPassword_var?.pristine)
    {
        return null;
    }

    return password_var && conformPassword_var && password_var.value != conformPassword_var.value ? 
    {"Property_Mismatch_after_Validation" : true}  : null;


    
}