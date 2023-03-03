import {Component, Input} from '@angular/core';
import {Personne} from "../Modeles/Personne";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
   @Input() public auteur !: Personne;
   @Input() public note !: string;
   @Input() public date !: Date;

}
