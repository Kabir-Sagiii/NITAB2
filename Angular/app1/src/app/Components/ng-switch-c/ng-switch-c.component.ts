import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-c',
  templateUrl: './ng-switch-c.component.html',
  styleUrls: ['./ng-switch-c.component.css']
})
export class NgSwitchCComponent implements OnInit {
  productData:any
  btnStatus:string = 'basic'
  constructor() { }

    getProductInformation(){
        fetch('https://fakestoreapi.com/products/5').then((res)=>{
              return res.json()
        }).then((actualData)=>{
          console.log(actualData)
          this.productData = actualData
        })
    }
    changeStatus(value:string){
      this.btnStatus = value
    }

  ngOnInit(): void {
     this.getProductInformation()
  }

}
