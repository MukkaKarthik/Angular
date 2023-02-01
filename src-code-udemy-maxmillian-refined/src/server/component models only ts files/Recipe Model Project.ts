export class RecipeModel
{
    public recipeName : string = "";
    public recipeDescription : string = "";
    public ImagePath : string = "";

    constructor(name_temp: string,desc_temp : string,img_temp : string)
    {
        this.recipeDescription = desc_temp;
        this.ImagePath = img_temp;
        this.recipeName = name_temp;
    }

}