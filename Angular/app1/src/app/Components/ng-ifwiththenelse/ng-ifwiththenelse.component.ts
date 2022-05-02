import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifwiththenelse',
  templateUrl: './ng-ifwiththenelse.component.html',
  styleUrls: ['./ng-ifwiththenelse.component.css']
})
export class NgIFwiththenelseComponent implements OnInit {

  product:any = {
    pname:"Iphone 13",
    price:90000,
    image:"https://www.concept-phones.com/wp-content/uploads/2021/04/iphone-13-12s-render-coverpigtou-april-2021-3.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
