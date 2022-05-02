import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-ex',
  templateUrl: './ngswitch-ex.component.html',
  styleUrls: ['./ngswitch-ex.component.css']
})
export class NgswitchEXComponent implements OnInit {

  selectedView:string = 'basic'
  productDetails:any = {
    pname:"Macbook",
    price:240000,
    image:"https://th.bing.com/th/id/OIP.HnXIiPUHJ8urCxOdpu8nZgHaEK?pid=ImgDet&rs=1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit  facilis quidem quasi consectetur itaque aliquam nesciunt dolore"
           
            
  }

    changePreview(value:string){
      this.selectedView = value

    }
  constructor() { }

  ngOnInit(): void {
  }

}
