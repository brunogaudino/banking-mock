import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { publicTitleReducer } from "./store/reducers/direct-treasure.reducer";
import { HomeComponent } from './home/home.component';

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
    AppComponent,
    HomeComponent
  ],
  exports: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
  ]
})
export class AppModule { }
