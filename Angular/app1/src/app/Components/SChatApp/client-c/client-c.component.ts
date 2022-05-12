import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-c',
  templateUrl: './client-c.component.html',
  styleUrls: ['./client-c.component.css']
})
export class ClientCComponent implements OnInit {
 clientData:string = ''
 @Output() customEvent:EventEmitter<string> = new EventEmitter()
  constructor() { }

  sendDataToHome(i:any){
    //  alert(this.clientData)
    this.customEvent.emit(this.clientData)
    i.value = ''
  }

  ngOnInit(): void {
  }

}
