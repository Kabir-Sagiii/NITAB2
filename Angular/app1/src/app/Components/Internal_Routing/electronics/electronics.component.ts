import { Component, OnInit } from '@angular/core';
import {CategorysService} from '../categorys.service'

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronicsData:any
  constructor(private cs:CategorysService) { }

  ngOnInit(): void {
    this.getElectronicsData()
  }

  getElectronicsData(){
    this.cs.getDataFromServer('electronics').subscribe((data)=>{
           console.log(data)
           this.electronicsData = data
    })
  }

}
