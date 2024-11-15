import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  constructor(){
    console.log("this is constructor called")
  }

  ngOnInit(){
    console.log("ngoninit called")
  }

  ngOnChanges(){
    console.log("ngon changes called")
  }

  ngAfterViewInit(){
    console.log("this viewinit called")
  }

  ngAfterViewChecked(){
    console.log("this is viewInit cslled")
  }

  ngAfterContentInit(){
    console.log("this is contentinit called")
  }

  ngAfterContentChecked(){
    console.log("content checked called")
  }
 @Input() count:number=0;
 @Input() step:number=1;

  inc(){
    this.count=this.count+this.step
    
  }

  dec(){
    this.count=this.count-this.step
  }

}
