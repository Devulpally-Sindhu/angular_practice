import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Amma1Component } from './amma1/amma1.component';
import { Amma2Component } from './amma2/amma2.component';
import { Amma3Component } from './amma3/amma3.component';


@NgModule({
  declarations: [
    AppComponent,
    Amma1Component,
    Amma2Component,
    Amma3Component,
  
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
