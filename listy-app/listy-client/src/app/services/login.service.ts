import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http){}

  login(credentials){
    const loginOptions = new RequestOptions({
      'withCredentials': true
    });
    return this.http
      .post('http://localhost:4000/api/v1/login', credentials, loginOptions)
      .map(response => response.json());
  }
}
