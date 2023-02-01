export class ShoppingModel
{
    public gamesProducts : string = "";
    public apparels : string = "";
    public groceries : string = "";

    constructor(games_temp: string,apparels_temp : string, groceries: string)
    {
            this.apparels = apparels_temp;
            this.gamesProducts = games_temp;
            this.groceries = groceries;
    }
}