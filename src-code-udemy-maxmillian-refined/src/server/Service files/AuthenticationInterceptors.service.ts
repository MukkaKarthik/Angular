import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";

export class AuthenticationInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {

/*         //If we want to send the request without any modification
       console.log("Request is on the way , this is authentication service"); // right before request leaves the application

       return next.handle(req); // this will ensure request has to continue its journey */


       // Modifying URL and then sending request 



       let modifiedURL = req.clone({headers : req.headers.append("URLModification","PerformedEnhancement 1st Interceptor")})
       console.log("Modification of URL is done");
       console.log(req.url);
       
       return next.handle(modifiedURL).pipe(
           tap(function(eventObject)
           {
                console.log(eventObject);

                if(eventObject.type == HttpEventType.Response)
                {
                    console.log("response arrived , body exists , action being performed on 1st authenticator");
                    console.log(eventObject.body);
                }
           })
       );

    }

}



//By using interceptors ,not just Interaction with request is possible , but also interaction with response is possible