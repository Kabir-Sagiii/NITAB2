import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  reactPara:boolean = false
  angularPara:boolean = true
    showReact(){
       this.reactPara = true
       this.angularPara = false
    }

    showAngular(){
      this.reactPara = false 
      this.angularPara = true
    }

  constructor() { }

  ngOnInit(): void {
  }

}
