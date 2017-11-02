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
var element_service_1 = require("./services/element.service");
var shared_service_1 = require("./services/shared.service");
require("rxjs/Rx");
var InputFormComponent = (function () {
    function InputFormComponent(elementService, _sharedService) {
        this.elementService = elementService;
        this._sharedService = _sharedService;
    }
    InputFormComponent.prototype.addElement = function (form) {
        var _this = this;
        console.log(form.value);
        this.elementService.addElement(form.value)
            .subscribe(function (result) {
            _this._sharedService.publishData("update");
        });
    };
    return InputFormComponent;
}());
InputFormComponent = __decorate([
    core_1.Component({
        selector: 'element-add',
        template: "\n    <form #inputForm=\"ngForm\" (ngSubmit)=\"addElement(inputForm)\">\n      <label for=\"element\">Element</label>\n      <input type=\"text\" name=\"element\" id=\"element\" ngModel>\n\n      <button type=\"submit\">Add</button>\n    </form>\n  ",
    }),
    __metadata("design:paramtypes", [element_service_1.ElementService, shared_service_1.SharedService])
], InputFormComponent);
exports.InputFormComponent = InputFormComponent;
//# sourceMappingURL=input-form.component.js.map