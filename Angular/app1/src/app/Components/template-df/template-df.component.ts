import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-template-df',
  templateUrl: './template-df.component.html',
  styleUrls: ['./template-df.component.css']
})
export class TemplateDFComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
   getData(e:any) {
      this.http.post('http://localhost:9001/user/postdata',{name:e.target.uname.value,email:e.target.phone.value},{responseType: 'text'})
      .subscribe((res)=>{
      
        console.log(res)
      })
   }
}
