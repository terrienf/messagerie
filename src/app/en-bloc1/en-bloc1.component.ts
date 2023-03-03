import { Component } from '@angular/core';

import {Personne} from '../Modeles/Personne';
import {ServiceService} from "../services/service.service";

@Component({
  selector: 'app-en-bloc1',
  templateUrl: './en-bloc1.component.html',
  styleUrls: ['./en-bloc1.component.css']
})

export class EnBloc1Component{

  public personnes: Personne[];
  constructor(private svc: ServiceService) {

    this.personnes = this.svc.auteurs;
  }



  // constructor() {
  //   this.personnes = [];
  //   let bob = new Personne("François", "Terrien");
  //   let lucie = new Personne("Olivia", "Terrien");
  //   this.personnes.push(bob);
  //   this.personnes.push(lucie);
  // }
}
