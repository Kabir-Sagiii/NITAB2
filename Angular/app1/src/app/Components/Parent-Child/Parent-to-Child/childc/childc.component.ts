import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
  @Input() childData:string = 'No Data'
  constructor() { }

  ngOnInit(): void {
  }

}
