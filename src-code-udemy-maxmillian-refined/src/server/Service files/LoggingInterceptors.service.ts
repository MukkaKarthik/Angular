import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {


       let modifiedURL = req.clone({headers : req.headers.append("URLModification","PerformedEnhancement - 2nd Authenticator")})
       console.log("Outgoing request is done on 2nd Interceptor");
       console.log(req.url);
       
       return next.handle(modifiedURL).pipe(
           tap(function(eventObject)
           {
                console.log(eventObject);

                if(eventObject.type == HttpEventType.Response)
                {
                    console.log("response arrived , body exists , action being performed on 2nd authenticator");
                    console.log(eventObject.body);
                }
           })
       );

    }

}


