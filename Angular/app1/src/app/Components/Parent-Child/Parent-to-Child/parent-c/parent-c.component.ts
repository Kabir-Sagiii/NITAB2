import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent implements OnInit {

   parentData:string =''

   getParentData(inputRef:any) {
    
    this.parentData = inputRef.value
   }

  constructor() { }

  ngOnInit(): void {
  }

}
