import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:any = []
  res:any
  actualData:any
 

  constructor() { }

     async getUser(){
     this.res=   await fetch("https://randomuser.me/api/?results=5000")
      this.actualData = await this.res.json()
      this.user = this.actualData.results
      console.log(this.user)
      }

  ngOnInit(): void {
    this.getUser()
  }

}
