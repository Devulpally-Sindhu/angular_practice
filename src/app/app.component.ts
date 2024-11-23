import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';

  countries:any;
  isLoading:boolean=true;
  newPost:any={
    firstname:'',
    lastname:''
  }
  constructor(public ss:S1Service){}

  ngOnInit(){
    this.ss.getCountries().subscribe({
      next:(res)=>{
        this.countries=res;
         console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.isLoading=false
      }
    })
  }

  add(){
   // alert(JSON.stringify(this.newPost))
   this.ss.addNewPost(this.newPost).subscribe((res)=>{
    console.log(res)
   })
  }

 
}
