import { Component } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-chat';
  public currentUser: UserModel = new UserModel('');
  public get isAuthenticated(): boolean {
    return !!this.currentUser.name;
  }

  public onAuthorized(user: UserModel): void {
    this.currentUser = user;
  }

}

