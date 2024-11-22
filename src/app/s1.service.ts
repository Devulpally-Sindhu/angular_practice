import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
  s1Sub=new Subject()
}
