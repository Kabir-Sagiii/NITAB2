import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientSService {

  constructor(private httpclient:HttpClient) { }


          getUsersDataFromServer():Observable<any>{
                 
           return  this.httpclient.get<any>('https://jsonplaceholder.typicode.com/users')
          }
}
