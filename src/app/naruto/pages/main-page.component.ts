import { Component } from '@angular/core';
import { NarutoService } from '../services/naruto.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-naruto-main-page',
  templateUrl: './main-page.component.html'
})

export class NarutoPageComponent {
  constructor( private narutoService: NarutoService ) { }

  get characters(): Character[] {
    return [...this.narutoService.characterList]
  }

  deleteCharacter(id: string){
    this.narutoService.characterDelete(id);
  }

  addCharacter(character: Character){
    this.narutoService.characterAdd(character);
  }
}
