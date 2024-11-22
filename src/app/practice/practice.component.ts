import { Component } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  a1:any;
  a2:any;
  addition:any;
  constructor(public ss:S1Service){}

  add(){
    this.ss.s1Sub.next(this.addition=+(this.a1)+ +(this.a2))
  }

  // calsub(){
  //   this.ss.s1Sub.next(this.addition);
  // }




}
