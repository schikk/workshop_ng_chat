import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {

  public messageText = '';

  @Output() public send: EventEmitter<string> = new EventEmitter<string>();

  public sendMessage(): void {
    this.send.emit(this.messageText);
    this.messageText = '';
  }

}
