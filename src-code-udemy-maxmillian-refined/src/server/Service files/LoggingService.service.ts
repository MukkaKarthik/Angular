export class ServiceLogging_ServiceComponent
{
    stringValue : string = "Bangalore";


    DataStorage  =
    {
        location: "location data storage",
        Country : "country data storage"

    }

    EmptyJSONObject =
    {
        location : "",
        Country : ""
    }


    LogConsole()
    {
        console.log("Logging service methods to console");
        console.log(this.DataStorage);
        console.log(this.EmptyJSONObject);
    }

    CompanyDetails  = [
        {location : "Bangalore" , Country : "India" },
        {location : "washington" , Country : "USA"},
        {location : "Copenhagen" , Country : "Denmark" },
        {location : "London" , Country : "UK" }
    ]

    provideDetails()
    {
        console.log(this.CompanyDetails);
    }

    addJSONObject()
    {
        this.CompanyDetails.push(this.DataStorage);

    }


    addViaMethod(string1 : string , string2 : string)
    {
        this.EmptyJSONObject.location = string1;
        this.EmptyJSONObject.Country = string2;
    }

    JSONobject_add()
    {
        this.CompanyDetails.push(this.EmptyJSONObject);
    }




}



