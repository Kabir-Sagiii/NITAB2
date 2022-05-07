import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcc',
  templateUrl: './parentcc.component.html',
  styleUrls: ['./parentcc.component.css']
})
export class ParentccComponent implements OnInit {
  dataFromChild:string = ''

  getDataFromChild(e:any){
    console.log(e)
    this.dataFromChild = e
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
