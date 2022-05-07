import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-childcc',
  templateUrl: './childcc.component.html',
  styleUrls: ['./childcc.component.css']
})
export class ChildccComponent implements OnInit {
   childData:string = ''
   @Output() childCustomEvent:EventEmitter<string> = new EventEmitter()


   getChildData(inputRef:any){
     this.childData = inputRef.value
     this.childCustomEvent.emit(this.childData)
   }
  constructor() { }

  ngOnInit(): void {
  }

}
