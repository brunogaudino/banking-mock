import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
  ]
})
export class AppModule { }
