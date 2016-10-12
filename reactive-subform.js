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
var core_1 = require('@angular/core');
var ReactiveSubform = (function () {
    function ReactiveSubform() {
        this.showSubform = false;
        this.deleteProp = function (x) {
            console.log("Delete ", x);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveSubform.prototype, "classField", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ReactiveSubform.prototype, "valueItem", void 0);
    ReactiveSubform = __decorate([
        core_1.Component({
            selector: 'reactive-subform',
            template: "\n\t\t<div class=\"sub-form\" [ngClass]=\"{'col-sm-10': classField.custom.labelLeft}\">\n\t\t\t<div><p (click)=\"showSubform=!showSubform;\">{{valueItem.name}}</p><i class=\"fa fa-times red-text\" (click)=\"deleteProp(valueItem)\"></i></div>\n\t\t\t<reactive-form *ngIf=\"showSubform\" [formObject]=\"classField.formObject\" [valueObject]=\"valueItem\"></reactive-form>\n\t\t</div>\n\t",
            styles: ["\n\t\tlabel {padding-left: 0;}\n\t\t.sub-form {padding-left: 0;}\n\t\t.sub-form > div {width: 175px;}\n\t\t.sub-form > div > i {float: right; margin-top: 7px; color: red;}\n\t\t.sub-form > div > i:hover {cursor: pointer;}\n\t\t.sub-form > div > p {margin: 5px 0; font-weight: bold; display: inline-block;}\n\t\t.sub-form > div > p:hover {cursor: pointer; text-decoration: underline;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], ReactiveSubform);
    return ReactiveSubform;
}());
exports.ReactiveSubform = ReactiveSubform;
//# sourceMappingURL=reactive-subform.js.map