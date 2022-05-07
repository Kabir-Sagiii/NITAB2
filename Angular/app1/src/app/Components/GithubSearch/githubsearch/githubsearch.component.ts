import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {ServeSService} from '../../../Services/serve-s.service'

@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {
  username:string =''
  userDetails:any
       @Output() customEvent:EventEmitter<any> = new EventEmitter()
  constructor(private service:ServeSService) { }

  // getUserDetails(){
  //   // alert(this.username)
  //     fetch(`https://api.github.com/users/${this.username}`)
  //     .then((res)=>{
  //       return res.json()
  //     }).then((data)=>{
  //         console.log(data)
  //     })
  // }

     getDataFromService(){
       this.service.getGithubDataOfUser(this.username).then((res)=>{return res.json()})
       .then((actualData)=>{

        this.userDetails = actualData
        this.customEvent.emit(this.userDetails)
        console.log(this.userDetails)
       })
     }

  ngOnInit(): void {
  }

}
