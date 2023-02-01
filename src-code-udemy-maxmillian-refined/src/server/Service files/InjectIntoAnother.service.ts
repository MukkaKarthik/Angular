export class InjectService
{
    Branches : any = ["Mechanical","Civil","Electrical","Computer Science",
    {location : "Bangalore" , Country :"India"},{location : "London" , Country :"UK"}];


    PushCombined_JSONObject : any = [
        {currency : "dollar", status :"developed"},
        {currency : "Euro" , status : "Not developed"},
        {currency : "Rubble" , status : "degrading" }
    ]

    addBranch(BranchString : string)
    {
        this.Branches.push(BranchString);
    }

    removeBranch()
    {
        this.Branches.pop();
    }

    

    getBranches()
    {
        return this.Branches;
    }

    Push_destructedJSONObject()
    {
        this.Branches.push(...this.PushCombined_JSONObject);
    }

}