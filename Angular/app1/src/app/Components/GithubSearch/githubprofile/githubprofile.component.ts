import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {
     @Input() userProfileDetails:any
  constructor() { }

  ngOnInit(): void {
  }

}
