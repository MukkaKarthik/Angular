import { JsonPipe } from "@angular/common";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { errorObject } from "rxjs/internal-compatibility";
import { catchError } from "rxjs/operators";



 interface AuthenticationService {
    error: any;
    idToken : string,
    email : string,
    refreshToken : string,
    expiresIn : string,
    localId : string,
    registered : boolean
}


@Injectable({
    providedIn : "root" // also can be declared this way , rather than providing the service in app module 
}) // if not used it will throw an error while injecting this in component
export class AuthenticationFirebase
{
    localStorageDetails_global : any = "";

    firebasePostService! : HttpClient //this is return type ,but not HTTPClient module injection , we are just declaring return type
   
    //without using constructor ,then angular won't inject HTTPClient module in this class 
    constructor(temporaryLocal : HttpClient)
    {
        this.firebasePostService = temporaryLocal; // now the injected module is assigned to a property in the class

    }


    SignUpMethod(EmailLocalRef : string , PasswordLocalRef : string)
    {

        //here API_key can be found in firebase console window 

        // <AuthenticationService> is return type for this method 

        this.firebasePostService.post<AuthenticationService>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKpgPqb59XRl97VZX5ANqTW6mImgyPVv8",{
            "email" : EmailLocalRef,
            "password" : PasswordLocalRef,
            "returnSecureToken" : true
        })
        .subscribe(function(eventObject_firebase)
        {
              console.log(eventObject_firebase);
              
        });


    }


    
    StoreObject  =
    {
        ProgrammingLanguage : "JavaScript",
        InventedCompany : "Microsoft"
    }

    StoreDetails_inBrowser()
    {
        localStorage.setItem("Language Details",JSON.stringify(this.StoreObject)) 

        // Json.stringify() serializes object into a string. It converts an object into a string


      
        

        
        
    }

}


//If we want to insert a new email and password then use sign up link first and sign in link , or else it won't work 


