export class CustomPropertiesModel
{
    public type_model : string = "";
    public Statement_model : string = "";
    public Output_model : boolean = true;

    constructor(a : string , b: string , c: boolean)
    {
            this.type_model = a;
            this.Statement_model = b;
            this.Output_model = c;

    }
    
}