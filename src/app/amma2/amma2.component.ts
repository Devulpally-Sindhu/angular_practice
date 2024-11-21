import { Component } from '@angular/core';
import { SindhuService } from '../sindhu.service';

@Component({
  selector: 'app-amma2',
  templateUrl: './amma2.component.html',
  styleUrl: './amma2.component.css'
})
export class Amma2Component {
  b2firstName:any;
  constructor(public ss:SindhuService){}
  ngOnInit(){
    this.ss.sindhuSub.subscribe((res)=>{
      this.b2firstName=res;
    })
  }
 

}
