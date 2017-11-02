"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_service_1 = require("./services/login.service");
require("rxjs/Rx");
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.login = function (form) {
        console.log(form.value);
        this.loginService.login(form.value)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-box',
        template: "\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n    <label for=\"element\">Username</label>\n    <input type=\"text\" name=\"username\" id=\"username\" ngModel>\n    <label for=\"element\">Password</label>\n    <input type=\"text\" name=\"password\" id=\"password\" ngModel>\n    <button type=\"submit\">Login</button>\n  </form>\n  ",
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map