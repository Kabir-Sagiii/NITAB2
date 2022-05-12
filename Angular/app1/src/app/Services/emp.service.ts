import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpclient:HttpClient) { }

       getDataFromServer():Observable<any> {
        return this.httpclient.get('https://randomuser.me/api/?results=50')
       }

    
    
}
