export class IngredientModel
{
    public IngredientName : string = "";
    public IngredientAmount : number = 0;

    constructor(in_temp: string , in_amo : number)
    {
            this.IngredientAmount = in_amo;
            this.IngredientName = in_temp;
    }
}