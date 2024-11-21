import { Component } from '@angular/core';
import { SindhuService } from '../sindhu.service';

@Component({
  selector: 'app-amma3',
  templateUrl: './amma3.component.html',
  styleUrl: './amma3.component.css'
})
export class Amma3Component {
  
b2firstName:any;
constructor(public ss:SindhuService){}
ngOnInit(){
  this.ss.sindhuSub.subscribe((res)=>{
    this.b2firstName=res;
  })
}

}
