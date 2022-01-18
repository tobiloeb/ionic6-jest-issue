import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IonicModule.forRoot({ swipeBackEnabled: false }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
