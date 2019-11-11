import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { publicTitleReducer } from "./store/reducers/direct-treasure.reducer";

const rootReducers = {
  publicTitleReducer: publicTitleReducer
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducers)
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
