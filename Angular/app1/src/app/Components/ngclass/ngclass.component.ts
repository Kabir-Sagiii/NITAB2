import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  colorStatus:boolean = false
  divStatus:boolean = false
  constructor() { }
  chnageDivColor(value:string) {
    if(value==='dark') {
   this.divStatus = false }
   else {
     this.divStatus = true
   }
  }

  changeColorStatus(v:any){
      if(v.value){
        this.colorStatus = true
      } else {
        this.colorStatus = false
      }
  }

  ngOnInit(): void {
  }

}
