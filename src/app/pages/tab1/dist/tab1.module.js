"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tab1PageModule = void 0;
var angular_1 = require("@ionic/angular");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tab1_page_1 = require("./tab1.page");
var tab1_routing_module_1 = require("./tab1-routing.module");
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                tab1_routing_module_1.Tab1PageRoutingModule
            ],
            declarations: [tab1_page_1.Tab1Page]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());
exports.Tab1PageModule = Tab1PageModule;
