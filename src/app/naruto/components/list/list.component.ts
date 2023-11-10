import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'naruto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  listCharacter: Character[] = [{
    name: 'Rock',
    clan: 'Lee',
    power: 250
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id?: string): void{
    if ( !id ) return;
    console.log({id});
    this.onDeleteCharacter.emit(id);
  }

}
