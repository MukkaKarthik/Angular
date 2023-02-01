// It is always recommend to keep types / identifiers as a variable to prevent spelling mistakes while emitting an action 

import { Type } from "@angular/core";
import { Action } from "@ngrx/store";

import {initialState_redux} from "./reducerFunction1.reducer"

export const addCollegeName_actionType = "addCollegeName";

export const addSchoolName_actionType = "addSchoolName";

export const addFullName_actionType = "addFullName";


export class fullName implements Action
{
    readonly type = addFullName_actionType; 
    // readonly increases the security by not changing the type from anywhere in the application


       
}

export class SchoolName implements Action
{
   readonly type = addSchoolName_actionType;
  payload! : Action
}

export class CollegeName implements Action
{
    readonly type = addCollegeName_actionType;
}