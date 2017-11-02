import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ElementService {

  constructor(private http: Http){}

  getElements() {
    return this.http
      .get('http://localhost:4000/api/v1/elements')
      .map(response => response.json());
  }

  addElement(elem){
    const loginOptions = new RequestOptions({
      'withCredentials': true
    });
    return this.http
      .post('http://localhost:4000/api/v1/element', elem, loginOptions)
      .map(response => response.json());
  }
}
