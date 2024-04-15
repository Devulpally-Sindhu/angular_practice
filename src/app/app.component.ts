import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
  likes:number=0;
  dislikes:number=0;

  like(){
    this.likes=this.likes+1
  }

  dislike(){
    this.dislikes=this.dislikes+1
  }
}
