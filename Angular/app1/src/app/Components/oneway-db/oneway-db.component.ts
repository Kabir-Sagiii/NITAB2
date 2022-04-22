import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-db',
  templateUrl: './oneway-db.component.html',
  styleUrls: ['./oneway-db.component.css']
})
export class OnewayDBComponent implements OnInit {

     typeValue:string="password"
     buttonText:string="Show Password"
     textData:string=''
  productDetails:any = {
    image:"https://tse1.mm.bing.net/th?id=OIP.uj21rdWJCNqZDaOXrlqAZwHaGX&pid=Api&P=0&w=199&h=171",
    pname:"Macbook Pro",
    description:" Appreciate the fact that you could help me repair the laptop during the lockdown. I needed it back in working condition as soon as possible. Thank you for understanding my concern and bringing my laptop back to life. It is working perfectly fine now",
    price:240000,
    qty:5
  }

  getData(inputRef:any){
    console.log(inputRef.value)
    this.textData = inputRef.value
    inputRef.value = ''

  }

  changeType():void{
// this.typeValue = 'text'
// this.buttonText = 'Hide Password'
//      if(this.typeValue==='password'){
//        this.typeValue = 'text'
//         this.buttonText = 'Hide Password'
//      } else {
//        this.typeValue = 'password'
//  this.buttonText = 'Show Password'
//      }

      if(this.typeValue==='password'){
        this.typeValue='text'
        this.buttonText = 'Hide Password'
      } else {
        this.typeValue = 'password'
        this.buttonText = 'Show Password'
      }


  }

  changeData():void {
    // alert("working")
    this.productDetails = {
      image:"https://m.media-amazon.com/images/I/61D84NtVgVL._FMwebp__.jpg",
      pname:"Iphone 13",
      description:"Appreciate the fact that you could help me repair the laptop during the lockdown",
      price:90000,
      qty:2
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
