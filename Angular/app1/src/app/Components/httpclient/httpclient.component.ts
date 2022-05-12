import { Component, OnInit } from '@angular/core';
import {HttpclientSService} from '../../Services/httpclient-s.service'


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  users:any 
  constructor(private httpclients:HttpclientSService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.httpclients.getUsersDataFromServer().subscribe((data)=>{

                console.log(data)
                this.users = data

    })
  }


     
}
