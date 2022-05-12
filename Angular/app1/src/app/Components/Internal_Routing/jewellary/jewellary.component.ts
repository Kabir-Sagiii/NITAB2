import { Component, OnInit } from '@angular/core';
import {CategorysService} from '../categorys.service'

@Component({
  selector: 'app-jewellary',
  templateUrl: './jewellary.component.html',
  styleUrls: ['./jewellary.component.css']
})
export class JewellaryComponent implements OnInit {
 jewellaryData:any
  constructor(private cs:CategorysService) { }

   getJewellaryData(){
    this.cs.getDataFromServer('jewelery').subscribe((data)=>{
           console.log(data)
           this.jewellaryData= data
    })
  }

  ngOnInit(): void {
    this.getJewellaryData()
  }

}
