import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'naruto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listCharacter: Character[] = [{
    name: 'Rock',
    clan: 'Lee',
    power: 250
  },{
    name: 'Sasuke',
    clan: 'Uchiha',
    power: 240
  }]

}
