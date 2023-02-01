import { Pipe, PipeTransform } from "@angular/core";


//Working on custom defined pipes

@Pipe(
    {
        name : "CustomDefinedPipe"
    }
)
export class TransformNames implements PipeTransform 
{
    transform(value: string , Gender : string) : string {

        if(Gender.toLowerCase() == "male")
        {
            return "Mr." + value;
        }

        else
        {
            return "Mrs." + value;
        }
       
    }

}