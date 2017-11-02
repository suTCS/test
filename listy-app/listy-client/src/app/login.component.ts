import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import 'rxjs/Rx';

@Component({
  selector: 'login-box',
  template: `
  <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
    <label for="element">Username</label>
    <input type="text" name="username" id="username" ngModel>
    <label for="element">Password</label>
    <input type="text" name="password" id="password" ngModel>
    <button type="submit">Login</button>
  </form>
  `,
})

export class LoginComponent {

  constructor(private loginService:LoginService){}
  
  login(form: NgForm) {
    console.log(form.value);
    this.loginService.login(form.value)
      .subscribe((result) => {
        console.log(result);
    });
  }

}