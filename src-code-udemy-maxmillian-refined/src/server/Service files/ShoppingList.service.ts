import { Injectable } from "@angular/core";
import { InjectService } from "./InjectIntoAnother.service";

@Injectable()
export class ShoppingList
{
    shoppingArray : any = ["Toys",{location : "facebook",ProductName : "Testing"}];

    PushDataComponent = 
    {
        location : "",
        ProductName : ""
        
    }


    getShoppingList()
    {
        return this.shoppingArray;
    }

    addShoppingList_StringValue( string_temp : string)
    {
        this.shoppingArray.push(string_temp);
    }

    addShoppingList_JSONValue_directPush(loc_temp : string , Prod_temp : string)
    {
        this.shoppingArray.push({location : loc_temp , ProductName : Prod_temp});
    }

    addShoppingList_IndirectPush(indirect_location : string , indirect_prod : string)
    {
            this.PushDataComponent.location = indirect_location;
            this.PushDataComponent.ProductName = indirect_prod;
            this.shoppingArray.push(this.PushDataComponent);
    }

    remove_LastItem()
    {
        this.shoppingArray.pop();
    }



    //using services from other class 

    constructor(useOther : InjectService)
    {
        console.log(useOther.Branches);

        useOther.addBranch("Adding Branch from using injectable");

        console.log(useOther.Branches);


    }
}