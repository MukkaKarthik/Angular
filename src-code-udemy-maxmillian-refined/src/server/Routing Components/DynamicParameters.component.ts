import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component(
    {
        selector : 'dynamicParameters-selector',
        templateUrl : "../HTML files/Routing HTML files/dynamicParameters.html"
    }
)
export class DynamicInject_ParametersIn_URL implements OnInit

//    usersList : {id : number , fullName : string}[] = [] :- by declaring return type this way , we can get auto intellisense while adding multiple JSON objects 




/*usersList :  [{id : number , fullName : string},
    {id : number , fullName : string},
    {id : number , fullName : string},
    {id : number , fullName : string},
    {id : number , fullName : string}] = []  
    
    :- 

    By declaring this way , typescript will be strict in accepting JSON array , 
    it won't accept more or less than 5,it should be 5  */ 



{

    usersList :/*  [{id : number , fullName : string},
        {id : number , fullName : string},
        {id : number , fullName : string},
        {id : number , fullName : string},
        {id : number , fullName : string}] */ {id : number , fullName : string}[] = [
        {
            id : 1 ,
            fullName : "facebook developer , id = 1"
        },
        {
            id : 2 ,
            fullName : "Google developer , id = 2"
        },
        {
            id : 3 ,
            fullName : "Reliance developer , id = 3"

        },
        {
            id : 4 ,
            fullName : "Toyota developer , id = 4"

        },
        {
            id : 5,
            fullName : "Microsoft developer , id = 5 "
        }
    ];



    DynamicUserList :  any = [];

   

    


    constructor(private DynamicActRoute : ActivatedRoute)
    {
   
    }
    ngOnInit() : void
    {
      
            this.DynamicUserList = 
            {
                id_dynamic : this.DynamicActRoute.snapshot.params["id"],
                fullName_dynamic : this.DynamicActRoute.snapshot.params["nameUnique"]
            }

            //Data is loaded using snapshot object




            //Using observables :- used when parameters change 


            this.DynamicActRoute.params.subscribe((params_temp : Params) =>
            {
                this.DynamicUserList.id_dynamic = +params_temp["id"]; 
    // by adding + sign , we are making sure that id should always be a number , or else it will show output as NaN 
                this.DynamicUserList.fullName_dynamic = params_temp["nameUnique"]
            });
    }

    //ActivatedRoute will give us access to the parameters passed in URL 

}