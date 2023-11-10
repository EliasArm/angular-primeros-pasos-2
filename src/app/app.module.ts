import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './naruto/pages/main-page.component';
import { NarutoModule } from './naruto/naruto.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    NarutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
