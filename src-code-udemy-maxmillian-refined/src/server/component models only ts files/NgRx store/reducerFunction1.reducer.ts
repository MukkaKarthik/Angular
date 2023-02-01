import { Action } from "@ngrx/store";

//import {addCollegeName_actionType , addSchoolName_actionType , addFullName_actionType} from "./actionRequired.action";

// It is good to always convention when entire file is imported

import * as CompleteJavaScriptObject from "./actionRequired.action"

export let initialState_redux = 
{
    fullName : "facebook developer",
    collegeName : "Delhi Public school",
    schoolName : "Engineering College",

}


export function reducerFunction1(currentState = initialState_redux, actionPerformed : Action)
{

    //NgRx package will call this function when required

    //for the first time , state is initial state but usually state is always previous state
    
    switch(actionPerformed.type)
    {
        //It is always considered as a bad practice using push function to update state value
          
         case CompleteJavaScriptObject.addFullName_actionType : return {
                ...currentState,
                currentState : {
                    fullName : "facebook developer changed on " + new Date(),
                    collegeName : "Delhi Public school",
                    schoolName : "Engineering College",

                }
            }

            case CompleteJavaScriptObject.addCollegeName_actionType : return {
                ...currentState,
                currentState : {
                    fullName : "facebook developer",
                    collegeName : "Delhi Public school changed on " + new Date(),
                    schoolName : "Engineering College",

                }
            } 

            case CompleteJavaScriptObject.addSchoolName_actionType : return {
                ...currentState,
                currentState : 
                {
                    fullName : "facebook developer " ,
                    collegeName : "Delhi Public school",
                    schoolName : "Engineering College changed on " + new Date(),

                } 
            } 
              
        }
}
    



