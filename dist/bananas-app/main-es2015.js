(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Ajax Loader for all -->\n<div *ngIf=\"!type && active\" class=\"bnn-loader\">\n  <span class=\"bnn-loader-wheel\"></span>\n  <span class=\"bnn-loader-label\">Loading</span>\n</div>\n\n<!-- Ajax Loader for tables -->\n<div *ngIf=\"type=='line'\"  class=\"bnn-loader-line\">\n  <div *ngIf=\"active\" class=\"bnn-loader-line-wrapper\">\n    <span class=\"bnn-loader-line-phase bnn-loader-line-phase--1\"></span>\n    <span class=\"bnn-loader-line-phase bnn-loader-line-phase--2\"></span>\n    <span class=\"bnn-loader-line-phase bnn-loader-line-phase--3\"></span>\n    <span class=\"bnn-loader-line-phase bnn-loader-line-phase--4\"></span>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu-main/menu-main.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu-main/menu-main.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"bnn-main-menu\">\n  <li><a [routerLink]=\"['/games']\" routerLinkActive=\"active\">Games</a></li>\n  <li><a [routerLink]=\"['/rules']\" routerLinkActive=\"active\">Rules</a></li>\n  <li><a [routerLink]=\"['/about']\" routerLinkActive=\"active\">About</a></li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-game/page-game.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-game/page-game.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Section -->\n<div class=\"bnn-main-section bnn-main-section--game\">\n\n  <!-- Main Section - Header -->\n  <header class=\"bnn-main-section-header\" [@headerTransition]=\"headerTransitionState\">\n    <div class=\"container\">\n      <h1 *ngIf=\"!isLoadingData\" class=\"bnn-main-section-header-title\">{{gameData.name}}</h1>\n    </div>\n  </header>\n\n  <!-- Loader -->\n  <app-loader [active]=\"isLoadingData\"></app-loader>\n\n  <!-- Main Section - Content -->\n  <div *ngIf=\"!isLoadingData\" class=\"bnn-main-section-content bnn-game-details\">\n    <div class=\"container\">\n      <p class=\"bnn-game-details-description\">{{gameData.description}}</p>\n      <p class=\"bnn-game-details-vendor\"><span class=\"bnn-game-details-lbl\">Vendor:</span> {{gameData.vendor}}</p>\n      <iframe class=\"bnn-game-details-iframe\" [src]=\"buildSafeUrl(gameData.url)\"></iframe>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-games/page-games.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-games/page-games.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Section -->\n<div class=\"bnn-main-section bnn-main-section--game\">\n\n  <!-- Main Section - Header -->\n  <header class=\"bnn-main-section-header\" [@headerTransition]=\"headerTransitionState\">\n    <div class=\"container\">\n      <h1 class=\"bnn-main-section-header-title\">Games</h1>\n    </div>\n  </header>\n\n  <!-- Loader -->\n  <app-loader [active]=\"isLoadingData\"></app-loader>\n\n  <!-- Main Section - Content -->\n  <div *ngIf=\"!isLoadingData\" class=\"bnn-main-section-content\">\n    <div class=\"container\">\n\n      <!-- Game Name Filter -->\n      <div class=\"bnn-search\">\n        <form [formGroup]=\"searchForm\">\n          <div class=\"bnn-search-field\">\n            <input matInput type=\"text\" placeholder=\"Filter by game\" formControlName=\"searchText\" (keyup)=\"filterByText(searchForm)\">\n            <button class=\"bnn-search-clean-btn\" *ngIf=\"searchForm.value.searchText\" mat-button type=\"button\"\n              matSuffix mat-icon-button aria-label=\"Clean search textbox\"\n              (click)=\"searchForm.controls['searchText'].setValue(''); filterByText(searchForm)\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </div>\n        </form>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-md-3\">\n\n          <!-- Categories Filter -->\n          <ul class=\"bnn-categories-filter bnn-list mb-4\">\n            <li class=\"bnn-categories-filter-item active\" id=\"cat-menu-item-all\" (click)=\"selectCategory('all')\">All</li>\n            <li class=\"bnn-categories-filter-item\" *ngFor=\"let category of categoriesData; let i=index\" [id]=\"'cat-menu-item-'+category.slug\" (click)=\"selectCategory(category.slug)\">{{category.name}}</li>\n          </ul>\n        </div>\n        <div class=\"col-md-9\">\n\n          <!-- Loader -->\n          <app-loader [active]=\"isLoadingGamesData\"></app-loader>\n\n          <!-- List of Games -->\n          <ul *ngIf=\"!isLoadingGamesData\" class=\"bnn-popgames-list bnn-list row\">\n            <li *ngFor=\"let game of gamesData | slice:0:maxItemsVisible; let i=index\" class=\"bnn-popgames-list-item col-sm-6 col-md-4 col-lg-3\">\n              <div class=\"bnn-game bnn-game--square\">\n                <div class=\"bnn-img-wrapper bnn-img-wrapper--game\">\n                  <img class=\"bnn-img bnn-img--resp\" [src]=\"game.thumbnail\" [alt]=\"game.name\">\n                </div>\n                <div class=\"bnn-game-info\">\n                  <a class=\"bnn-game-info-name\" [routerLink]=\"'/game/'+game.id\">{{game.name}}</a>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <p *ngIf=\"!isLoadingGamesData && gamesData.length<=0\">No games have been found</p>\n          <a *ngIf=\"!isLoadingGamesData && gamesData && gamesData.length > maxItemsVisible\" [routerLink]=\"\" class=\"bnn-link mt-5\" (click)=\"loadMore()\">Load more games</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-home/page-home.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-home/page-home.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bnn-main-section\">\n\n  <!-- Main Section - Header -->\n  <header class=\"bnn-main-section-header\" [@headerTransition]=\"headerTransitionState\">\n    <div class=\"container\">\n      <h1 class=\"bnn-main-section-header-title\">{{welcomeTitle}}</h1>\n    </div>\n  </header>\n\n  <!-- Main Section - Content -->\n  <div class=\"bnn-main-section-content\">\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col-md-7 col-lg-8\">\n\n          <!-- Popular Games Section -->\n          <app-section-games-popular></app-section-games-popular>\n        </div>\n        <div class=\"col-md-5 col-lg-4\">\n\n          <!-- Chekout Games Btn -->\n          <button class=\"bnn-btn bnn-btn--navigate\" type=\"button\" mat-button aria-label=\"See all games\" title=\"See all games\" (click)=\"goToGamesPage()\">Checkout all games we have</button>\n\n          <!-- Search Games Section -->\n          <app-section-games-search></app-section-games-search>\n\n          <!-- Categories Section -->\n          <app-section-categories></app-section-categories>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/parent-main/parent-main.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/parent-main/parent-main.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Header -->\n<header class=\"bnn-header\">\n  <nav class=\"bnn-header-nav\" [ngClass]=\"menuStatusClass\">\n    <div class=\"container\">\n\n      <!-- ForestSIM Logo -->\n      <a class=\"bnn-logo\" routerLink=\"/\" title=\"Go to home\">\n        <img class=\"bnn-logo-img\" src=\"assets/imgs/bnn-logo.jpg\" alt=\"Crazy Bananas\">\n      </a>\n\n      <!-- Main Menu - Mobile Toggle -->\n      <button (click)=\"toggleMobileMainMenu()\" class=\"bnn-header-nav-toggler\" type=\"button\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Open/Close menu\">\n        <span class=\"bnn-header-nav-toggler-slice bnn-header-nav-toggler-slice--1\"></span>\n        <span class=\"bnn-header-nav-toggler-slice bnn-header-nav-toggler-slice--2\"></span>\n        <span class=\"bnn-header-nav-toggler-slice bnn-header-nav-toggler-slice--3\"></span>\n      </button>\n      \n      <!-- Main Menu - Links -->\n      <app-menu-main></app-menu-main>\n    </div>\n  </nav>\n</header>\n\n<!-- Main Content -->\n<main class=\"bnn-main\" role=\"main\">\n  <router-outlet></router-outlet>\n</main>\n\n<!-- Main Footer -->\n<footer class=\"bnn-footer\">\n  <div class=\"container\">\n    <span class=\"bnn-footer-copyrights\">© 2019 Crazy Bananas</span>\n    <nav class=\"bnn-footer-nav\">\n      <ul class=\"bnn-footer-menu\">\n        <li><a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Privacy</a></li>\n        <li><a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\">Terms</a></li>\n      </ul>\n    </nav>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/section-categories/section-categories.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/section-categories/section-categories.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Categories Section -->\n<section class=\"bnn-generic-section mt-5\">\n  <header class=\"bnn-generic-section-header\">\n    <h2 class=\"bnn-generic-section-header-title\">Categories</h2>\n  </header>\n  <div class=\"bnn-generic-section-content\">\n\n    <!-- Loader -->\n    <app-loader [active]=\"isLoadingData\"></app-loader>\n\n    <!-- List of Categories -->\n    <ul *ngIf=\"!isLoadingData\" class=\"bnn-categories-list bnn-list\">\n      <li class=\"bnn-categories-list-item\" *ngFor=\"let category of categoriesData; let i=index\">\n        <a class=\"bnn-category-name\" [routerLink]=\"'/games/cat/'+category.slug\">{{category.name}}</a>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/section-games-popular/section-games-popular.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/section-games-popular/section-games-popular.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Popular Games Section -->\n<section class=\"bnn-generic-section\">\n  <header class=\"bnn-generic-section-header\">\n    <h2 class=\"bnn-generic-section-header-title\">Popular games</h2>\n  </header>\n  <div class=\"bnn-generic-section-content\">\n\n    <!-- Loader -->\n    <app-loader [active]=\"isLoadingData\"></app-loader>\n\n    <!-- List of Games -->\n    <ul *ngIf=\"!isLoadingData\" class=\"bnn-popgames-list bnn-list row\">\n      <li class=\"bnn-popgames-list-item col-sm-6 col-md-6 col-lg-4\" *ngFor=\"let game of gamesData; let i=index\">\n        <div class=\"bnn-game bnn-game--square\">\n          <img class=\"bnn-img bnn-img--resp\" [src]=\"game.thumbnail\" [alt]=\"game.name\">\n          <div class=\"bnn-game-info\">\n            <a class=\"bnn-game-info-name\" [routerLink]=\"'/game/'+game.id\">{{game.name}}</a>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/section-games-search/section-games-search.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/section-games-search/section-games-search.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Game Name Filter -->\n<div class=\"bnn-search mt-4\">\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"gotoGamesAndFilterByText(searchForm)\">\n        <div class=\"bnn-search-field\">\n        <input matInput type=\"text\" placeholder=\"Search game\" formControlName=\"searchText\">\n        <button class=\"bnn-search-clean-btn\" *ngIf=\"searchForm.value.searchText\" mat-button type=\"button\"\n            matSuffix mat-icon-button aria-label=\"Clean search textbox\"\n            (click)=\"searchForm.controls['searchText'].setValue('');\">\n            <mat-icon>close</mat-icon>\n        </button>\n        </div>\n        <button type=\"submit\" class=\"bnn-table-search-btn\" mat-icon-button>\n        <mat-icon aria-label=\"Search in the list\">search</mat-icon>\n        </button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_parent_main_parent_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/parent-main/parent-main.component */ "./src/app/components/parent-main/parent-main.component.ts");
/* harmony import */ var _components_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-home/page-home.component */ "./src/app/components/page-home/page-home.component.ts");
/* harmony import */ var _components_page_game_page_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-game/page-game.component */ "./src/app/components/page-game/page-game.component.ts");
/* harmony import */ var _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-games/page-games.component */ "./src/app/components/page-games/page-games.component.ts");







const routes = [
    {
        path: '',
        component: _components_parent_main_parent_main_component__WEBPACK_IMPORTED_MODULE_3__["ParentMainComponent"],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            { path: 'home', component: _components_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeComponent"], data: {} },
            { path: 'games', component: _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_6__["PageGamesComponent"], data: {} },
            { path: 'games/search-game/:searchGame', component: _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_6__["PageGamesComponent"] },
            { path: 'games/cat/:category', component: _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_6__["PageGamesComponent"] },
            { path: 'games/search-game/:searchGame/cat/:category', component: _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_6__["PageGamesComponent"] },
            { path: 'game/:gameId', component: _components_page_game_page_game_component__WEBPACK_IMPORTED_MODULE_5__["PageGameComponent"], data: {
                    breadcrumb: [
                        { label: 'Games', url: '/games' },
                        { label: 'Game', url: '' }
                    ]
                } },
        ]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bananas-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-home/page-home.component */ "./src/app/components/page-home/page-home.component.ts");
/* harmony import */ var _components_parent_main_parent_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parent-main/parent-main.component */ "./src/app/components/parent-main/parent-main.component.ts");
/* harmony import */ var _components_menu_main_menu_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/menu-main/menu-main.component */ "./src/app/components/menu-main/menu-main.component.ts");
/* harmony import */ var _components_section_games_popular_section_games_popular_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/section-games-popular/section-games-popular.component */ "./src/app/components/section-games-popular/section-games-popular.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_page_game_page_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-game/page-game.component */ "./src/app/components/page-game/page-game.component.ts");
/* harmony import */ var _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page-games/page-games.component */ "./src/app/components/page-games/page-games.component.ts");
/* harmony import */ var _components_section_games_search_section_games_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/section-games-search/section-games-search.component */ "./src/app/components/section-games-search/section-games-search.component.ts");
/* harmony import */ var _components_section_categories_section_categories_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/section-categories/section-categories.component */ "./src/app/components/section-categories/section-categories.component.ts");

// Modules






// Third party



// Components










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _components_page_home_page_home_component__WEBPACK_IMPORTED_MODULE_11__["PageHomeComponent"],
            _components_parent_main_parent_main_component__WEBPACK_IMPORTED_MODULE_12__["ParentMainComponent"],
            _components_menu_main_menu_main_component__WEBPACK_IMPORTED_MODULE_13__["MenuMainComponent"],
            _components_section_games_popular_section_games_popular_component__WEBPACK_IMPORTED_MODULE_14__["SectionGamesPopularComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"],
            _components_page_game_page_game_component__WEBPACK_IMPORTED_MODULE_16__["PageGameComponent"],
            _components_page_games_page_games_component__WEBPACK_IMPORTED_MODULE_17__["PageGamesComponent"],
            _components_section_games_search_section_games_search_component__WEBPACK_IMPORTED_MODULE_18__["SectionGamesSearchComponent"],
            _components_section_categories_section_categories_component__WEBPACK_IMPORTED_MODULE_19__["SectionCategoriesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.type = null;
        this.active = true;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoaderComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('active'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LoaderComponent.prototype, "active", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/menu-main/menu-main.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/menu-main/menu-main.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1tYWluL21lbnUtbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/menu-main/menu-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/menu-main/menu-main.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMainComponent", function() { return MenuMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuMainComponent = class MenuMainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-main',
        template: __webpack_require__(/*! raw-loader!./menu-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu-main/menu-main.component.html"),
        styles: [__webpack_require__(/*! ./menu-main.component.scss */ "./src/app/components/menu-main/menu-main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuMainComponent);



/***/ }),

/***/ "./src/app/components/page-game/page-game.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/page-game/page-game.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1nYW1lL3BhZ2UtZ2FtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-game/page-game.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/page-game/page-game.component.ts ***!
  \*************************************************************/
/*! exports provided: PageGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageGameComponent", function() { return PageGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let PageGameComponent = class PageGameComponent {
    constructor(gamesService, route, sanitizer) {
        this.gamesService = gamesService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.subs = [];
        this.headerTransitionState = 'start';
        this.isLoadingData = true;
    }
    ngOnInit() {
        this.subs.push(this.route.params.subscribe(params => {
            //get param1 = game/:gameId
            this.gameId = params['gameId'];
            this.initRequests();
            this.getData();
        }));
    }
    /////////
    // Data & Requests
    //-----------------------------------------------
    initRequests() {
        // Get Game - Answer
        this.subs.push(this.gamesService.dataGame$.subscribe(response => {
            this.isLoadingData = false;
            this.headerTransitionState = 'end';
            this.gameData = response;
        }));
    }
    getData() {
        this.gamesService.getGame(this.gameId);
    }
    /////////
    // Extras
    //-----------------------------------------------
    buildSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    /////////
    // Destroy
    //-----------------------------------------------
    ngOnDestroy() {
        this.subs.forEach(subscription => {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    }
};
PageGameComponent.ctorParameters = () => [
    { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
PageGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-game',
        template: __webpack_require__(/*! raw-loader!./page-game.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-game/page-game.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('headerTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    backgroundColor: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].themeColor
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    backgroundColor: '#fff'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')
                ]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./page-game.component.scss */ "./src/app/components/page-game/page-game.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], PageGameComponent);



/***/ }),

/***/ "./src/app/components/page-games/page-games.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/page-games/page-games.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1nYW1lcy9wYWdlLWdhbWVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page-games/page-games.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/page-games/page-games.component.ts ***!
  \***************************************************************/
/*! exports provided: PageGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageGamesComponent", function() { return PageGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let PageGamesComponent = class PageGamesComponent {
    constructor(formBuilder, gamesService, route, location) {
        this.formBuilder = formBuilder;
        this.gamesService = gamesService;
        this.route = route;
        this.location = location;
        this.subs = [];
        this.headerTransitionState = 'start';
        //Loaders
        this.isLoadingData = true;
        this.isLoadingGamesData = true;
        //Cached filters
        this.filteredSearchGame = null;
        this.filteredCategory = 'all';
        this.gamesFilterCacheData = [];
        //Pagination
        this.itemsLoadedEachTime = 12;
        this.maxItemsVisible = this.itemsLoadedEachTime;
        this.currentPage = 1;
    }
    ngOnInit() {
        setTimeout(() => {
            this.headerTransitionState = 'end';
        }, 1);
        this.subs.push(this.route.params.subscribe(params => {
            //get param1 = games/search-game/:searchGame
            this.filteredSearchGame = (params['searchGame']) ? params['searchGame'] : null;
            //get param2 = games/cat/:category
            this.filteredCategory = (params['category']) ? params['category'] : null;
            this.initForm();
            this.initRequests();
            this.getData();
        }));
    }
    /////////
    // Data & Requests
    //-----------------------------------------------
    initRequests() {
        //Get Games - Answer
        this.subs.push(this.gamesService.dataGames$.subscribe(response => {
            this.gamesData = this.gamesFilterCacheData = response;
            this.maxItemsVisible = this.itemsLoadedEachTime;
            this.dataArrived();
        }));
        //Get Games By Category - Answer
        this.subs.push(this.gamesService.dataGamesByCategory$.subscribe(response => {
            this.gamesData = this.gamesFilterCacheData = response;
            this.maxItemsVisible = this.itemsLoadedEachTime;
            this.dataArrived();
        }));
        //Get Categories - Answer
        this.subs.push(this.gamesService.dataCategories$.subscribe(response => {
            this.categoriesData = response;
            this.dataArrived();
        }));
    }
    getData() {
        this.gamesService.getCategories();
        if (this.filteredCategory)
            this.gamesService.getGamesByCategory(this.filteredCategory);
        else
            this.gamesService.getGames();
    }
    dataArrived() {
        if (this.gamesData && this.categoriesData) {
            this.isLoadingData = false;
            this.isLoadingGamesData = false;
            //Filter by text with filter on URL or Local
            if (this.filteredSearchGame)
                this.filterByText(this.searchForm);
            //Update categories menu with category filter on URL
            if (this.filteredCategory)
                this.updateCategoriesSelectedItem(this.filteredCategory);
        }
    }
    /////////
    // Forms
    //-----------------------------------------------
    initForm() {
        //Init search form
        this.searchForm = this.formBuilder.group({
            searchText: [this.filteredSearchGame]
        });
    }
    validateForm(form) {
        if (!form.valid) {
            return false;
        }
        return true;
    }
    /////////
    // Filtering
    //-----------------------------------------------
    selectCategory(categoryId) {
        this.isLoadingGamesData = true;
        this.filteredCategory = categoryId;
        if (this.filteredCategory === 'all') {
            this.gamesService.getGames();
        }
        else {
            this.gamesService.getGamesByCategory(this.filteredCategory);
        }
        this.updateCategoriesSelectedItem(categoryId);
    }
    updateCategoriesSelectedItem(categoryId) {
        setTimeout(() => {
            let catItems = document.getElementsByClassName('bnn-categories-filter-item');
            for (var i = 0; i < catItems.length; i++) {
                catItems[i].classList.remove('active');
            }
            document.getElementById('cat-menu-item-' + categoryId).classList.add('active');
        });
    }
    //Here i didn't know how to search by name usign the provided API, so i decided to do this localy by using a simple filter via font-end.
    filterByText(submittedForm) {
        if (this.validateForm(submittedForm)) {
            this.filteredSearchGame = submittedForm.value.searchText.trim().toLocaleLowerCase();
            this.gamesData = this.gamesFilterCacheData.filter(game => {
                return game.name.trim().toLocaleLowerCase().includes(this.filteredSearchGame);
            });
            this.updateUrlFilters();
        }
    }
    updateUrlFilters() {
        //this.location.replaceState('/games/search-game/'+this.filteredSearchGame+'/cat/'+this.filteredCategory);
    }
    /////////
    // Pagination
    //-----------------------------------------------
    loadMore() {
        this.currentPage += 1;
        this.maxItemsVisible = this.itemsLoadedEachTime * this.currentPage;
    }
    /////////
    // Destroy
    //-----------------------------------------------
    ngOnDestroy() {
        this.subs.forEach(subscription => {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    }
};
PageGamesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
PageGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-games',
        template: __webpack_require__(/*! raw-loader!./page-games.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-games/page-games.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('headerTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    backgroundColor: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].themeColor
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    backgroundColor: '#fff'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('start => end', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1s')
                ]),
            ])
        ],
        styles: [__webpack_require__(/*! ./page-games.component.scss */ "./src/app/components/page-games/page-games.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], PageGamesComponent);



/***/ }),

/***/ "./src/app/components/page-home/page-home.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/page-home/page-home.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-home/page-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/page-home/page-home.component.ts ***!
  \*************************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PageHomeComponent = class PageHomeComponent {
    constructor(router) {
        this.router = router;
        this.headerTransitionState = 'start';
        this.welcomeTitle = 'Welcome to Crazy Bananas';
    }
    ngOnInit() {
        setTimeout(() => {
            this.headerTransitionState = 'end';
        }, 1);
    }
    goToGamesPage() {
        this.router.navigate(['games']);
    }
};
PageHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-home',
        template: __webpack_require__(/*! raw-loader!./page-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-home/page-home.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('headerTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    backgroundColor: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].themeColor
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    backgroundColor: '#fff'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')
                ]),
            ])
        ],
        styles: [__webpack_require__(/*! ./page-home.component.scss */ "./src/app/components/page-home/page-home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PageHomeComponent);



/***/ }),

/***/ "./src/app/components/parent-main/parent-main.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/parent-main/parent-main.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFyZW50LW1haW4vcGFyZW50LW1haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/parent-main/parent-main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/parent-main/parent-main.component.ts ***!
  \*****************************************************************/
/*! exports provided: ParentMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentMainComponent", function() { return ParentMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ParentMainComponent = class ParentMainComponent {
    constructor() {
        this.menuStatusClass = 'hidden';
        this.isOpen = true;
    }
    ngOnInit() {
    }
    toggleMobileMainMenu() {
        if (this.menuStatusClass == 'visible')
            this.menuStatusClass = 'hidden';
        else
            this.menuStatusClass = 'visible';
    }
    hideMobileMainMenu() {
        this.menuStatusClass = 'hidden';
    }
};
ParentMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parent-main',
        template: __webpack_require__(/*! raw-loader!./parent-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/parent-main/parent-main.component.html"),
        styles: [__webpack_require__(/*! ./parent-main.component.scss */ "./src/app/components/parent-main/parent-main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ParentMainComponent);



/***/ }),

/***/ "./src/app/components/section-categories/section-categories.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/section-categories/section-categories.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi1jYXRlZ29yaWVzL3NlY3Rpb24tY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/section-categories/section-categories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/section-categories/section-categories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SectionCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCategoriesComponent", function() { return SectionCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");



let SectionCategoriesComponent = class SectionCategoriesComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.subs = [];
        this.isLoadingData = true;
        this.categoriesData = [];
    }
    ngOnInit() {
        this.initRequests();
        this.getData();
    }
    /////////
    // Data & Requests
    //-----------------------------------------------
    initRequests() {
        //Get Categories - Answer
        this.subs.push(this.gamesService.dataCategories$.subscribe(response => {
            this.isLoadingData = false;
            this.categoriesData = response;
        }));
    }
    getData() {
        this.gamesService.getCategories();
    }
    /////////
    // Destroy
    //-----------------------------------------------
    ngOnDestroy() {
        this.subs.forEach(subscription => {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    }
};
SectionCategoriesComponent.ctorParameters = () => [
    { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }
];
SectionCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-categories',
        template: __webpack_require__(/*! raw-loader!./section-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/section-categories/section-categories.component.html"),
        styles: [__webpack_require__(/*! ./section-categories.component.scss */ "./src/app/components/section-categories/section-categories.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
], SectionCategoriesComponent);



/***/ }),

/***/ "./src/app/components/section-games-popular/section-games-popular.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/section-games-popular/section-games-popular.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi1nYW1lcy1wb3B1bGFyL3NlY3Rpb24tZ2FtZXMtcG9wdWxhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/section-games-popular/section-games-popular.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/section-games-popular/section-games-popular.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SectionGamesPopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionGamesPopularComponent", function() { return SectionGamesPopularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/games.service */ "./src/app/services/games.service.ts");



let SectionGamesPopularComponent = class SectionGamesPopularComponent {
    constructor(gamesService) {
        this.gamesService = gamesService;
        this.subs = [];
        this.isLoadingData = true;
        this.gamesData = [];
    }
    ngOnInit() {
        this.initRequests();
        this.getData();
    }
    /////////
    // Data & Requests
    //-----------------------------------------------
    initRequests() {
        //Get Games - Answer
        this.subs.push(this.gamesService.dataGamesPopular$.subscribe(response => {
            this.isLoadingData = false;
            this.gamesData = response;
        }));
    }
    getData() {
        this.gamesService.getGamesPopular();
    }
    /////////
    // Destroy
    //-----------------------------------------------
    ngOnDestroy() {
        this.subs.forEach(subscription => {
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    }
};
SectionGamesPopularComponent.ctorParameters = () => [
    { type: src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"] }
];
SectionGamesPopularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-games-popular',
        template: __webpack_require__(/*! raw-loader!./section-games-popular.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/section-games-popular/section-games-popular.component.html"),
        styles: [__webpack_require__(/*! ./section-games-popular.component.scss */ "./src/app/components/section-games-popular/section-games-popular.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
], SectionGamesPopularComponent);



/***/ }),

/***/ "./src/app/components/section-games-search/section-games-search.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/section-games-search/section-games-search.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi1nYW1lcy1zZWFyY2gvc2VjdGlvbi1nYW1lcy1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/section-games-search/section-games-search.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/section-games-search/section-games-search.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SectionGamesSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionGamesSearchComponent", function() { return SectionGamesSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SectionGamesSearchComponent = class SectionGamesSearchComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.initForm();
    }
    /////////
    // Forms
    //-----------------------------------------------
    initForm() {
        //Init search form
        this.searchForm = this.formBuilder.group({
            searchText: ['']
        });
    }
    validateForm(form) {
        if (!form.valid) {
            return false;
        }
        return true;
    }
    /////////
    // Filtering
    //-----------------------------------------------
    gotoGamesAndFilterByText(submittedForm) {
        if (this.validateForm(submittedForm)) {
            let searchText = submittedForm.value.searchText.trim().toLocaleLowerCase();
            this.router.navigate(['games/search-game/' + searchText]);
        }
    }
};
SectionGamesSearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SectionGamesSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-games-search',
        template: __webpack_require__(/*! raw-loader!./section-games-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/section-games-search/section-games-search.component.html"),
        styles: [__webpack_require__(/*! ./section-games-search.component.scss */ "./src/app/components/section-games-search/section-games-search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SectionGamesSearchComponent);



/***/ }),

/***/ "./src/app/services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let GamesService = class GamesService {
    constructor(http) {
        this.http = http;
        this.dataGames$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataGamesPopular$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataGamesByCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataGame$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getParams() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("brand", src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBrand).set("locale", src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiLocale);
    }
    getGames() {
        if (!this.games) {
            //Get data from DB
            let apiContent = 'games';
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + apiContent, { params: this.getParams() }).subscribe(data => {
                this.games = data._embedded.games.filter(game => game.enabled);
                this.dataGames$.next(this.games);
            }, error => {
                //Go to error generic page
            });
        }
        else {
            //Use cached data
            this.dataGames$.next(this.games);
        }
    }
    getGame(gameId) {
        if (!this.game || this.game.id !== gameId) {
            //Get data from DB
            let apiContent = 'games/' + gameId;
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + apiContent, { params: this.getParams() }).subscribe(data => {
                this.game = data;
                this.dataGame$.next(this.game);
            }, error => {
                //Go to error generic page
            });
        }
        else {
            //Use cached data
            this.dataGame$.next(this.game);
        }
    }
    getCategories(categoryName = null) {
        if (!this.categories) {
            //Get data from DB
            let apiContent = 'game-categories';
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + apiContent, { params: this.getParams() }).subscribe(data => {
                this.categories = data._embedded.game_categories;
                if (categoryName) //Send specific category games
                    this.dataGamesByCategory$.next(this.getCachedCategoryGames(categoryName));
                else //Send all categories
                    this.dataCategories$.next(this.categories);
            }, error => {
                //Go to error generic page
            });
        }
        else {
            //Use cached data
            if (categoryName) //Send specific category games
                this.dataGamesByCategory$.next(this.getCachedCategoryGames(categoryName));
            else //Send all categories
                this.dataCategories$.next(this.categories);
        }
    }
    getGamesPopular() {
        if (!this.gamesPopular) {
            //Get data from DB
            let apiContent = 'game-categories/popular-games';
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + apiContent, { params: this.getParams() }).subscribe(data => {
                this.gamesPopular = data._embedded.games.filter(game => game.enabled);
                this.dataGamesPopular$.next(this.gamesPopular);
            }, error => {
                //Go to error generic page
            });
        }
        else {
            //Use cached data
            this.dataGamesPopular$.next(this.gamesPopular);
        }
    }
    getGamesByCategory(categoryName) {
        this.getCategories(categoryName);
    }
    getCachedCategoryGames(categoryName) {
        return this.categories.filter(category => category.slug == categoryName)[0]._embedded.games;
    }
};
GamesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], GamesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://staging-frontapi.cherrytech.com/',
    apiBrand: 'cherrycasino.desktop',
    apiLocale: 'en',
    themeColor: '#eed133',
    themeBlueColor: '#6698bd'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/celso/bananas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map