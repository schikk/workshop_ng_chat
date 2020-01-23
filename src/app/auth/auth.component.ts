import { Component, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public username = '';

  @Output()
  public authorized: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  public login(): void {
    const user = new UserModel(this.username);
    this.authorized.emit(user);
    this.username = '';
  }

}
