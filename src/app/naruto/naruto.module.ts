import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { NarutoPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';



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
    CommonModule,
    FormsModule
  ]
})
export class NarutoModule { }
