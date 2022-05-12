import { Component, OnInit } from '@angular/core';
import {EmpService} from "../../Services/emp.service"

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  empData:any
  constructor(private emp:EmpService) { }

  ngOnInit(): void {
    this.emp.getDataFromServer().subscribe((data)=>{
            console.log(data)
            this.empData = data.results
    })
  }

}
