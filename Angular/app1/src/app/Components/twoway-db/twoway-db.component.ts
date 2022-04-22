import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-db',
  templateUrl: './twoway-db.component.html',
  styleUrls: ['./twoway-db.component.css']
})
export class TwowayDBComponent implements OnInit {

  uname:string="NIT"
  email:string="NIT@gmail.com"
  phone:number =9999999999

  constructor() { }

  ngOnInit(): void {
  }

}
