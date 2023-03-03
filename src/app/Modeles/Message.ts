import {Personne} from "./Personne";

export class Message{

  private _auteur: Personne;
  private _date: Date;
  private _note: string;

  constructor(auteur: Personne, note: string) {
    this._auteur = auteur;
    this._date = new Date();
    this._note = note;
  }

  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

 get date(): Date {
   return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }
}
