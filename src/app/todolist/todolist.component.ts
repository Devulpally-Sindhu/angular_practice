import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  tasks = ['amma', 'sindhu', 'dady', 'akka'];
  newTask: any = '';

  tasks1 = [
    {
      title: 'sindhu',
      status: true,
    },
    {
      title: 'keerthi',
      status: false,
    },
    {
      title: 'amma',
      status: true,
    },
    {
      title: 'dady',
      status: 'false',
    },
  ];

  filteredTasks=[...this.tasks1];
  selectedFilter:string='';

  add() {
    this.tasks.push(this.newTask);
  }

  deleteTask(i: any) {
    this.tasks1.splice(i, 1);
    this.filteredTasks=[...this.tasks1]
  }

  doneTask(i:any){
    this.tasks1[i].status=true;
    this.filteredTasks=[...this.tasks1]
  }

  undoTask(i:any){
    alert("fghj")
    this.tasks1[i].status=false;
    this.filteredTasks=[...this.tasks1]

  }

  applyFilter(){
    if(this.selectedFilter=="all"){
      this.filteredTasks=this.tasks1
    }

    if(this.selectedFilter=="completed"){
      this.filteredTasks=this.tasks1.filter(a=>{
        return a.status
      })
    }

    if(this.selectedFilter=="pending"){
      this.filteredTasks=this.tasks1.filter(a=>{
        return !a.status
      })
    }
  }
}
