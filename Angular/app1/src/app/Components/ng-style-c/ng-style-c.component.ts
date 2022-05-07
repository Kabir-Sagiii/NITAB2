import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-c',
  templateUrl: './ng-style-c.component.html',
  styleUrls: ['./ng-style-c.component.css']
})
export class NgStyleCComponent implements OnInit {
  mybox:any = {
    
    'background-color':'lightgreen',
    'padding':'30px'
  }
  constructor() { }

  changeStyle(){
    this.mybox = {
    'background-color':'lightcoral',
    'padding':'30px',
    'color':'cornsilk'
    }
  }

  ngOnInit(): void {
  }

}
