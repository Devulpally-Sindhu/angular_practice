import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input() x:any;
  @Input() i:any;

  @Output() delTask=new EventEmitter()
  @Output() doneTask=new EventEmitter()
  @Output() undoTask=new EventEmitter();
}
