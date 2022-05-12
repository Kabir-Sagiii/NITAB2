import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cc',
  templateUrl: './home-cc.component.html',
  styleUrls: ['./home-cc.component.css']
})
export class HomeCCComponent implements OnInit {
 clientData:String = ''
  constructor() { }
  getDataFromClient(e:any){
this.clientData =e 
// alert(this.clientData)
  }

  ngOnInit(): void {
  }

}
