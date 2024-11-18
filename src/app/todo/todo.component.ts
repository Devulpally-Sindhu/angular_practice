import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
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

  delete(i: any) {
    this.tasks1.splice(i, 1);
  }

  edit(i: any) {
    this.newTask[i].value;
  }

  doneTask(i:any){
    this.tasks1[i].status=true;

  }

  undoTask(i:any){
    this.tasks1[i].status=false;

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
