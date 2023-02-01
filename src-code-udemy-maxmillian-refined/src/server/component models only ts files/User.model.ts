import {Injectable } from "@angular/core";


export class UserDetails_fromServer
{
    constructor(private userName : string , private password : string , private tokenDetails : string = "helloPrivate", private tokenExpiration : Date)
    {

    }


    get tokenAllDetails()
    {
        if(!this.tokenExpiration || this.tokenExpiration > new Date())
        {
            return null;
        }

        //while calling get method , don't use () after method name 

        return this.tokenDetails;
    }



}