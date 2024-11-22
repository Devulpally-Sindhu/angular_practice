import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-pracice-2',
  templateUrl: './pracice-2.component.html',
  styleUrl: './pracice-2.component.css'
})
export class Pracice2Component {
  result:any;
  constructor(public ss:S1Service){}
  ngOnInit(){
    this.ss.s1Sub.subscribe((res)=>{
      this.result=res;
    })
  
  }

}
