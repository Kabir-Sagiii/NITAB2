import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-server-c',
  templateUrl: './server-c.component.html',
  styleUrls: ['./server-c.component.css']
})
export class ServerCComponent implements OnInit {
  @Input() homeData:any =''
  constructor() { }

  ngOnInit(): void {
  }

}
