import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
  // fruits:any[]=[
  //   "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", 
  //   "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
  //    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200"
  // ]

  fruits:any[]=[];
  image:string='';
  name:string="";
  description:string='';

  toggle:boolean=false;
  currentindex:any;

  addFruit(){
    let fruitInfo=
    {
      fruitImage:this.image,
      fruitName:this.name,
      fruitDes:this.description
    }
    this.image="";
    this.name='';
    this.description='';
    this.fruits.push(fruitInfo)
  }

  deleteFruit(i:number){
    this.fruits.splice(i,1)
  }

  editFruit(i:number){
    this.toggle=true;
    this.currentindex=i;
    this.image=this.fruits[i].fruitImage;
    this.name=this.fruits[i].fruitName;
    this.description=this.fruits[i].fruitDes;
  }

  saveFruit(){
    let fruit={
      fruitImage:this.image,
      fruitName:this.name,
      fruitDes:this.description
    }
    this.fruits[this.currentindex]=fruit;
    this.toggle=false;
  }

}
