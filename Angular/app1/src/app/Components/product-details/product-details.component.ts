import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ProductspecificService} from '../../Services/productspecific.service'

interface IProduct {
   id:number,
   category:string,
   price:number,
   image:string,
   description:string,
   title:string,
   rating:{
     rate:number,
     count:number
   }
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   productId:any
   productData:IProduct = {
     id:0,
     category:"",
     title:"",
     description:"",
     rating:{
       rate:0,
       count:0
     },
     image:"",
     price:0
   }
  // productData:any
  constructor(private activatedroute:ActivatedRoute,private productspecific:ProductspecificService) { }

  ngOnInit(): void {
    // alert(this.activatedroute.snapshot.paramMap.get('id'))
    this.productId = this.activatedroute.snapshot.paramMap.get('id')
    this.getSpecificProductData(this.productId)


  }
     getSpecificProductData(id:any){
            this.productspecific.getData(id).subscribe((res)=>{
                 console.log(res)
                 this.productData = res
            })
     }

}
