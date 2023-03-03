import { Injectable } from '@angular/core';
import {Personne} from "../Modeles/Personne";
import {Message} from "../Modeles/Message";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public get messages(): Message[] {
    return this._messages;
  }
  public get auteurs(): Personne[] {
    return this._auteurs;
  }

  private _auteurs: Personne[];
  private _messages: Message[];

  constructor() {
      this._auteurs = [];
      let bob = new Personne("Pierre", "Julien");
      let lucie = new Personne("Coralie", "Patrick");
      this._auteurs.push(bob);
      this._auteurs.push(lucie);

      this._messages =[];
      let francois = new Message (bob, "Bonjour");
      let olivia = new Message(lucie, "Au revoir");
      this.messages.push(francois);
      this.messages.push(olivia);

  }
}

