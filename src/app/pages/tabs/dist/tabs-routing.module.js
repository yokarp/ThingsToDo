"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tabs_page_1 = require("./tabs.page");
var routes = [
    {
        path: 'tabs',
        component: tabs_page_1.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tab1/tab1.module'); }).then(function (m) { return m.Tab1PageModule; }); }
            },
            {
                path: 'tab2',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../tab2/tab2.module'); }).then(function (m) { return m.Tab2PageModule; }); }
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
exports.TabsPageRoutingModule = TabsPageRoutingModule;
