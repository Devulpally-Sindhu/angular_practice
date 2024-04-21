import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
  students:any[]=[];

  firstname:string="";
  lastname:string="";
  age:string="";

  toggle:boolean=false;
  currentIndex:any;

  addStudent(){
    let studentDetails={
      fn:this.firstname,
      ln:this.lastname,
      age:this.age
    }
    this.firstname='';
    this.lastname='';
    this.age='';
    this.students.push(studentDetails)
  }

  deleteStudent(i:number){
    this.students.splice(i,1)

  }

  editStudent(i:number){
    this.currentIndex=i;
    this.toggle=true;
    this.firstname=this.students[i].fn;
    this.lastname=this.students[i].ln;
    this.age=this.students[i].age;

  }

  saveStudent(){
    let student={
      fn:this.firstname,
      ln:this.lastname,
      age:this.age
    }
    this.students[this.currentIndex]=student;
    this.toggle=false;
  }
}
