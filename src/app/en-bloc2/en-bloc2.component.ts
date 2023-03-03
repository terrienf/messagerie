import { Component } from '@angular/core';
import {Message} from "../Modeles/Message";
import {ServiceService} from "../services/service.service";
import {Personne} from "../Modeles/Personne";

@Component({
  selector: 'app-en-bloc2',
  templateUrl: './en-bloc2.component.html',
  styleUrls: ['./en-bloc2.component.css']
})
export class EnBloc2Component {

  public messages: Message[];
  constructor(private svc: ServiceService) {

    this.messages = this.svc.messages;
  }


  //
  // constructor() {
  //   this.messages=[];
  //   let francois = new Message ("François", "WTF");
  //   let olivia = new Message("Olivia", "AreuAreu");
  //   this.messages.push(francois);
  //   this.messages.push(olivia);
  // }

}
