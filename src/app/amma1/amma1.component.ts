import { Component } from '@angular/core';
import { SindhuService } from '../sindhu.service';

@Component({
  selector: 'app-amma1',
  templateUrl: './amma1.component.html',
  styleUrl: './amma1.component.css'
})
export class Amma1Component {
  firstname:any;
  constructor(public ss:SindhuService){}
  callsub(){
    this.ss.sindhuSub.next(this.firstname)

  }
 

}
