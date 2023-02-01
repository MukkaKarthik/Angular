import { Pipe, PipeTransform } from "@angular/core";


@Pipe(
    {
        name : "CustomPipeDecorator",
        //Whenever there are any changes on the data in the front end , pipe is re-calculated which might cause performance issues ,

        pure : false // if used , then pipe transformation is calculated always whenever there is some data change

        //This is called impure pipe , where we are forcing pipe to transform to run every time whenever there is some data change 
    }
)
export class CustomPipes implements PipeTransform
{

    transform(value: any , limitString : number) {
        
       
        if(value.length > limitString)
        {
            return "starting from limit value " + value.substring(limitString,limitString + 3);

            
        }

     
        return value.substring(0,3) + " adding custom pipe functionality";

      
    }

}