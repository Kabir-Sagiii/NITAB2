import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  res:any
  userData:any
  showRadio:boolean = false
  filteredUser:any = []
  constructor() { }

  async  getUsersData() {
     this.res=  await  fetch('https://randomuser.me/api/?results=30')
  
      this.userData= await this.res.json()
      this.filteredUser = this.userData.results
      this.showRadio = true
      
  }
   filterData(value:string){
     this.filteredUser = this.userData.results.filter((element:any)=>{
             if(value ==='all') {
               return true
             } else {
                  console.log(element.gender === value)
            return element.gender === value
             }
           
     })
   }

  ngOnInit(): void {
  }

}
