import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   colspanValue:string = "2"

  products:any = []

  constructor() { }

  getProductsDataFromServer() {
        fetch("https://fakestoreapi.com/products").then((res)=>{
            console.log(res) // binary format, we need to convert into json
             if(res.ok){
               return res.json()
             } else {
               alert("error while getting the data")
               return
             } // it will convert data in json format and return data in promise format
        }).then((data)=>{
           console.log(data)
           this.products = data
        }).catch((failuredata)=>{
                   alert("Catch executed")
        })
  }

  ngOnInit(): void {
  }

}
