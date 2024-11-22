import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrl: './practice1.component.css'
})
export class Practice1Component {
  result:any;
  constructor(public ss:S1Service){}

  ngOnInit(){
    this.ss.s1Sub.subscribe((res)=>{
      this.result=res;
    })
  }

}
