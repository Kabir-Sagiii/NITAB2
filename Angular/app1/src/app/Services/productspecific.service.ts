import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductspecificService {

  constructor(private httpc:HttpClient) { }

    getData(id:any):Observable<any>{
         return this.httpc.get(`https://fakestoreapi.com/products/${id}`)
    }
}
