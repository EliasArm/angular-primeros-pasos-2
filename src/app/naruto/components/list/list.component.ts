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
  onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(index: number): void{
    if ( !index ) return;
    console.log({index});
    this.onDeleteCharacter.emit(index);
  }

}
