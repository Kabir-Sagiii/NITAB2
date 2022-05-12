import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private httpclient:HttpClient) { }

      getDataFromServer(categoryname:string):Observable<any>{
        return this.httpclient.get(`https://fakestoreapi.com/products/category/${categoryname}`)
      }
}
