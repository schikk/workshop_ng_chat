import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MessageModel } from '../models/message.model';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { environment } from 'src/environments/environment';
import { Subscription, from } from 'rxjs';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, OnDestroy {

  public messages: MessageModel[] = [];
  private socket$ = new WebSocketSubject(environment.apiUrl);
  private socketSubscription: Subscription;

  @Input()
  private currentUser: UserModel;

  ngOnInit() {
    this.socketSubscription = this.socket$.subscribe(this.onReceived.bind(this));
    // for (let i = 0; i < 50; i++) {
    //   this.send('test' + i);
    // }
  }

  public ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  private onReceived({ text, author }) {
    const message = new MessageModel(text, author);
    this.messages.unshift(message);
  }

  public send(messageText): void {
    // this.messages.unshift(new MessageModel(messageText));
    this.socket$.next({
      text: messageText,
      author: this.currentUser.name
    });
  }

}
