import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './practice/practice.component';
import { Practice1Component } from './practice1/practice1.component';
import { Pracice2Component } from './pracice-2/pracice-2.component';


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    Practice1Component,
    Pracice2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
