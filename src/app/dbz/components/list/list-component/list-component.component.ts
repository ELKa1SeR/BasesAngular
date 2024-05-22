import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentDBZ{

  @Input()
  public characterList: Character[] = [
    {

      name: "Trunks",
      power:1000,
    }]

    // onDelete = Index value : number
    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?:string):void{
      if (!id) return;
      this.onDelete.emit(id);
    }


}
