import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  onClick() {
    for (let i = 0 ; i < this.users.length; i++) {
      if (this.users[i].firstName === 'Pooja') {
        this.users[i].firstName = 'Sunny';
        this.users[i].lastName = 'Dang';
      }
    }
  }
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
  pin: string;
  phone: string;
  address: Address;
}

interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}
