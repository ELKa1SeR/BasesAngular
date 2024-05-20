import { Component, EventEmitter, NgModule, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './agrega-character-component.component.html',
  styleUrls: ['./agrega-character-component.component.css']
})
export class AgregaCharacterComponentComponent  {

  @Output()
  onNewCharacter: EventEmitter<Character>= new EventEmitter();


  public character: Character={
    name: " ",
    power: 0,
  };
   emitCharacter(){
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);



  this.character.name = "";
  this.character.power = 0;
   }
}
