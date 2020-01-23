import { Component, Input } from '@angular/core';
import { MessageModel } from 'src/app/models/message.model';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input()
  public message: MessageModel;
  @Input()
  public currentUser: UserModel;

  private get isCurrentUserMessage(): boolean {
    return this.currentUser.name === this.message.author;
  }

  public get author(): string {
    if (!this.message.author) {
      return 'Anonymos'
    }
    return this.isCurrentUserMessage ? 'You' : this.message.author;
  }

}
