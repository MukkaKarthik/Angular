import { EventEmitter, Injectable } from "@angular/core";


export class RecipeService
{
  private  DifferentRecipes : any = ["car","washing machine", "fridge",{country : "India"}];

  private recipeJSOnObject  =
  {
      Rice : "Noodles",
      Snacks : "Pizza"
  }

  private recipeSelected = new EventEmitter();


    addRecipe(string1 : string) : void
    {
        this.DifferentRecipes.push(string1);
        console.log(this.DifferentRecipes);
    }

    removeRecipe() : void
    {
        this.DifferentRecipes.pop();
    }


    getRecipeList()
    {
        return this.DifferentRecipes.slice();

        /* by using slice method , we are creating a copy of DifferentRecipes , this is done because javascript
        will return references but not actual array as array is not a primitive type  */
    }


    getJSONList()
    {
        return this.recipeJSOnObject;
    }

}
