import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributebinding',
  templateUrl: './attributebinding.component.html',
  styleUrls: ['./attributebinding.component.css']
})
export class AttributebindingComponent implements OnInit {

  constructor() { }
   

  product:any = {
  image:"https://cdn11.bigcommerce.com/s-p8i5esyy64/images/stencil/960w/products/1952/7979/iphone-13-blue-select-2021__08080.1635344242.png?c=2",
  title:"Iphone 13",
  width:"300",
    height:"300"


  }

  ngOnInit(): void {
  }

}
