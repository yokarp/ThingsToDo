"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tab2PageModule = void 0;
var angular_1 = require("@ionic/angular");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tab2_page_1 = require("./tab2.page");
var tab2_routing_module_1 = require("./tab2-routing.module");
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                tab2_routing_module_1.Tab2PageRoutingModule
            ],
            declarations: [tab2_page_1.Tab2Page]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());
exports.Tab2PageModule = Tab2PageModule;
