webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\pages\home\home.html"*/`<ion-header>\n\n 	<ion-navbar color="menu">\n\n    	<button ion-button menuToggle>\n\n		    <ion-icon name="menu"></ion-icon>\n\n    	</button>\n\n    	<ion-title>BSPORTS</ion-title>\n\n  	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-card class="sombra-general">\n\n    <ion-grid>\n\n      <ion-row>\n\n    		<ion-col col-3 no-margin>\n\n          <div id="padre">\n\n          <div id="hijo" style="font-size: 4vw; font-weight: bold; text-align: center;">Deporte</div>\n\n          </div>\n\n        </ion-col>\n\n    		<ion-col col-9 no-margin>\n\n      		<ion-list>\n\n      			<ion-item>\n\n              <ion-select [(ngModel)]="gaming" interface="popover" cancelText="Cancelar" placeholder="Seleccione...">\n\n        				<ion-option value="nes">NES</ion-option>\n\n        				<ion-option value="n64">Nintendo64</ion-option>\n\n        				<ion-option value="ps">PlayStation</ion-option>\n\n        				<ion-option value="genesis">Sega Genesis</ion-option>\n\n        				<ion-option value="saturn">Sega Saturn</ion-option>\n\n        				<ion-option value="snes">SNES</ion-option>\n\n        			</ion-select>\n\n            </ion-item>\n\n      		</ion-list>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n  <!-- SECCION CENTRAL -->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-9 no-padding>\n\n      	<ion-card no-padding style="height: 90%">\n\n          <div id="padre" align="center" style="width: 100%">\n\n            <div id="hijo"><img src="img/Gambeta.jpg" style="width: 100%;"/></div>\n\n          </div>\n\n      	</ion-card>\n\n      </ion-col>\n\n\n\n      <!-- VIDEOS LATERALES -->\n\n      <ion-col col-3 no-padding>\n\n        <ion-card no-padding style="height: 90%">\n\n          <div align="center" id="padre">\n\n            <div id="hijo">\n\n            <img src="img/Gambeta.jpg" style="width: 80%; height: 18vw;"/><br>\n\n            <img src="img/Gambeta.jpg" style="width: 80%; height: 18vw;"/><br>\n\n            <img src="img/Gambeta.jpg" style="width: 80%; height: 18vw;"/>\n\n          </div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <!-- SECCION MIS VIDEOS -->\n\n  <h4 style="margin: 10px; font-size: 6vw">Mis Videos</h4>\n\n\n\n	<div class="hr"></div>\n\n\n\n  <!-- BOTONES -->\n\n	<ion-grid>\n\n		<ion-row>\n\n			<ion-col col-4>\n\n  			<button ion-button small color="light" round icon-left no-padding style="font-size: 2.5vw"><ion-icon name="film"></ion-icon>Grabar Vídeo</button>\n\n  		</ion-col>\n\n  		<ion-col col-4>\n\n  			<button ion-button small color="light" round icon-left no-padding style="font-size: 2.5vw"><ion-icon name="albums"></ion-icon>Cargar Archivo</button>\n\n  		</ion-col>\n\n  	</ion-row>\n\n	</ion-grid>\n\n\n\n  <!-- VIDEOS -->\n\n	<ion-grid>\n\n  	<ion-row>\n\n  		<ion-col col-6>\n\n  			<ion-card class="sombra-general">\n\n  				<img src="img/Gambeta.jpg" style="width: 100%" />\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">Velocidad</div>\n\n                <div class="card-subtitle vid-font-small">16/11/2017</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n  			</ion-card>\n\n  		</ion-col>\n\n  		<ion-col col-6>\n\n    		<ion-card class="sombra-general">\n\n  				<img src="img/Gambeta.jpg" style="width: 100%" />\n\n  				<ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">São Paulo</div>\n\n                <div class="card-subtitle vid-font-small">41 Listings</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n  		</ion-col>\n\n  		<ion-col col-6>\n\n  			<ion-card class="sombra-general">\n\n  				<img src="img/Gambeta.jpg" style="width: 100%" />\n\n  				<ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">São Paulo</div>\n\n                <div class="card-subtitle vid-font-small">41 Listings</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n  		</ion-col>\n\n  		<ion-col col-6>\n\n  			<ion-card class="sombra-general">\n\n  				<img src="img/Gambeta.jpg" style="width: 100%" />\n\n  				<ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">São Paulo</div>\n\n                <div class="card-subtitle vid-font-small">41 Listings</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n  		</ion-col>\n\n	 </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\pages\list\list.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\app\app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\Jtomas\Documents\Ionic\ionicSports\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map