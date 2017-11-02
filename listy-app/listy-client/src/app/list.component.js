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
var ListComponent = (function () {
    function ListComponent(elementService, _sharedService) {
        var _this = this;
        this.elementService = elementService;
        this._sharedService = _sharedService;
        this.elements = ["test1", "test2", "test3"];
        this._sharedService.listUpdateNeeded$.subscribe(function (data) {
            _this.getElements();
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getElements();
    };
    ListComponent.prototype.getElements = function () {
        var _this = this;
        this.elementService.getElements()
            .subscribe(function (result) {
            _this.elements = result.elements;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'element-list',
        template: "\n    <ul>\n      <li *ngFor=\"let element of elements\">{{ element }}</li>\n    </ul>\n  ",
    }),
    __metadata("design:paramtypes", [element_service_1.ElementService, shared_service_1.SharedService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map