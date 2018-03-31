import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data Service Connected');
  }

  getUsers() {
    return this.http.get('http://localhost:8080/usher/v1/users/')
    .map(res => res.json());
  }

}
