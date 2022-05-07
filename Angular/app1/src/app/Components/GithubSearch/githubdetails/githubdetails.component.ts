import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-githubdetails',
  templateUrl: './githubdetails.component.html',
  styleUrls: ['./githubdetails.component.css']
})
export class GithubdetailsComponent implements OnInit {
       @Input() userDetails:any
  constructor() { }

  ngOnInit(): void {
  }

}
