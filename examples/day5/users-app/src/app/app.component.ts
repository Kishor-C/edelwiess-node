import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';
  usersArray : any = undefined;
  constructor(private service: UsersService) { }

  handleClick() {
    this.service.getUsers().subscribe({
      next : (value) => this.usersArray = value
    });
  }
}
