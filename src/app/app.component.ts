import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
  students:any[]=[];

  newStr:string="";

  addStudent(){
    this.students.push(this.newStr);
    this.newStr=""
  }

  deleteStudent(i:number){
    this.students.splice(i,1)

  }

 
}
