import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(public http:HttpClient) { }

  getCountries(){
    return this.http.get("https://restcountries.com/v3/all")
  }

  addNewPost(newPost:any){
    return this.http.post("http://localhost:3000/students",newPost)

  }
}
