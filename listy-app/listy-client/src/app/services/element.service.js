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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ElementService = (function () {
    function ElementService(http) {
        this.http = http;
    }
    ElementService.prototype.getElements = function () {
        return this.http
            .get('http://localhost:4000/api/v1/elements')
            .map(function (response) { return response.json(); });
    };
    ElementService.prototype.addElement = function (elem) {
        var loginOptions = new http_1.RequestOptions({
            'withCredentials': true
        });
        return this.http
            .post('http://localhost:4000/api/v1/element', elem, loginOptions)
            .map(function (response) { return response.json(); });
    };
    return ElementService;
}());
ElementService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ElementService);
exports.ElementService = ElementService;
//# sourceMappingURL=element.service.js.map