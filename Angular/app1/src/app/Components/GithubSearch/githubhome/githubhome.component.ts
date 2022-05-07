import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-githubhome',
  templateUrl: './githubhome.component.html',
  styleUrls: ['./githubhome.component.css']
})
export class GithubhomeComponent implements OnInit {
   userDetails:any
  getDataFromGithubSearch(e:any) {
    console.log("Github Home",e)
    this.userDetails = e
  }

  constructor() { }

  ngOnInit(): void {
  }

}
