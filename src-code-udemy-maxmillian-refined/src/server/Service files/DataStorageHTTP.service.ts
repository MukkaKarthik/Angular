import { Injectable, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { RecipeModel } from "../component models only ts files/Recipe Model Project";

import { RecipeService } from "./RecipeService.service";

@Injectable()
export class DataStorageHTTP 
{
    
constructor(public helloWorld : RecipeService)
{

}

}