import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { NarutoPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    NarutoPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    NarutoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NarutoModule { }
