import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NarutoService {

  characterList: Character[] = [{
    id: uuidv4(),
    name: 'Naruto',
    clan: 'Uzumaki',
    power: 250
  },{
    id: uuidv4(),
    name: 'Sasuke',
    clan: 'Uchiha',
    power: 250
  },{
    id: uuidv4(),
    name: 'Rock',
    clan: 'Lee',
    power: 250
  }]

  characterDelete(id: string){
    this.characterList = this.characterList.filter(character => character.id !== id);
  }

  characterAdd(character: Character){
    const newCharacter = {id: uuidv4(), ...character};
    this.characterList.push(newCharacter);
  }

}
