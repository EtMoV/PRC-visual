import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Message} from "../Message";
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }


  onSendMessageToSalon = (form: NgForm) => {
    let messageToSend = new Message(form.value.messageToSend);
    console.log(messageToSend)
  }
}
