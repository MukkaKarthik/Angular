import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { UserModel } from '../Model';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  URL_variable : string = "";
  constructor(private httpVariable : HttpClient) { }



  //Posting data to server 

  PostData_toServer(userDetails : UserModel)
  {

return  this.httpVariable.post<any>(this.URL_variable,userDetails);

  }


}
