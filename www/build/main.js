webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrarse_registrarse__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recuperar_clave_recuperar_clave__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
    }
    LoginPage.prototype.stBar = function () {
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registrarse_registrarse__["a" /* RegistrarsePage */]);
    };
    LoginPage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.linkRecClave = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recuperar_clave_recuperar_clave__["a" /* RecuperarClavePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\login\login.html"*/`<ion-content class="login">\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<img src="img/Logo2.png" class="logo" />\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-form">\n		<ion-row>\n			<ion-col col-12>\n				<ion-item class="input-txt">\n					<ion-label color="light"><ion-icon name="person"></ion-icon></ion-label>\n				    <ion-input placeholder="Nombre de Usuario" class="input-txt"></ion-input>\n			  	</ion-item>\n			</ion-col>\n			<ion-col col-12>\n				<ion-item class="input-txt">\n				    <ion-label color="light"><ion-icon name="lock"></ion-icon></ion-label>\n				    <ion-input type="password" placeholder="Clave" class="input-txt"></ion-input>\n			  	</ion-item>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-btn">\n		<ion-row>\n			<ion-col col-12>\n				<button class="btn-principal" (click)="onLogin()">Ingresar</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<div class="txt-1" (click)="linkRecClave()">Recuperar Clave</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-txt">\n		<ion-row>\n			<ion-col col-12>\n				<div class="txt-1">¿No tienes una cuenta? <div class="txt-2" (click)="onClick()">Regístrate</div></div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navParams, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__["a" /* DescripcionPage */]);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"onClick()\" class=\"font-normal\">Editar V\u00EDdeo</button>\n      <button ion-item class=\"font-normal\">Quitar V\u00EDdeos</button>\n      <button ion-item class=\"font-normal\">Quitar V\u00EDdeos</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/descripcion/descripcion.module": [
		277,
		4
	],
	"../pages/login/login.module": [
		278,
		3
	],
	"../pages/popover/popover.module": [
		279,
		2
	],
	"../pages/recuperar-clave/recuperar-clave.module": [
		280,
		1
	],
	"../pages/registrarse/registrarse.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registrarse_registrarse__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_recuperar_clave_recuperar_clave__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recuperar_clave_recuperar_clave__["a" /* RecuperarClavePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__["a" /* DescripcionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/descripcion/descripcion.module#DescripcionPageModule', name: 'DescripcionPage', segment: 'descripcion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-clave/recuperar-clave.module#RecuperarClavePageModule', name: 'RecuperarClavePage', segment: 'recuperar-clave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrarse/registrarse.module#RegistrarsePageModule', name: 'RegistrarsePage', segment: 'registrarse', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registrarse_registrarse__["a" /* RegistrarsePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recuperar_clave_recuperar_clave__["a" /* RecuperarClavePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_descripcion_descripcion__["a" /* DescripcionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_descripcion_descripcion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registrarse_registrarse__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recuperar_clave_recuperar_clave__ = __webpack_require__(52);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_descripcion_descripcion__["a" /* DescripcionPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Descripción', component: __WEBPACK_IMPORTED_MODULE_5__pages_descripcion_descripcion__["a" /* DescripcionPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: 'Registrarse', component: __WEBPACK_IMPORTED_MODULE_7__pages_registrarse_registrarse__["a" /* RegistrarsePage */] },
            { title: 'Recuperar Clave', component: __WEBPACK_IMPORTED_MODULE_8__pages_recuperar_clave_recuperar_clave__["a" /* RecuperarClavePage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\app\app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>BSPORTS</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\list\list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescripcionPage = (function () {
    function DescripcionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DescripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionPage');
    };
    DescripcionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descripcion',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\descripcion\descripcion.html"*/`<ion-header>\n 	<ion-navbar color="menu">\n    	<button ion-button menuToggle>\n		    <ion-icon name="menu"></ion-icon>\n    	</button>\n    	<ion-title>BSPORTS</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <!-- SECCION CENTRAL -->\n  <ion-grid id="contenedor-video-actual">\n    <ion-row>\n      <ion-col col-12 id="columna-video-actual">\n        <img src="img/Gambeta.jpg" style="width: 100%; height: 100vw;"/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- SECCION MIS VIDEOS -->\n  <h4 class="font-title" id="misvideos">Descripción</h4>\n\n	<div class="hr"></div>\n\n  <!-- VIDEOS -->\n	<ion-grid class="margin-1">\n  	<ion-row>\n  		<ion-col col-3>\n        <div id="padre" class="padd-txt-sel">\n  			 <div id="hijo" class="lbl-select">Deporte</div>\n        </div>\n  		</ion-col>\n  		<ion-col col-9>\n        <div id="padre-select">\n      		<ion-list class="sombra-general" id="hijo">\n            <ion-item style="padding-left: 0;">\n              <ion-select [(ngModel)]="gaming" interface="popover" cancelText="Cancelar" placeholder="Seleccione...">\n                <ion-option value="nes">NES</ion-option>\n                <ion-option value="n64">Nintendo64</ion-option>\n                <ion-option value="ps">PlayStation</ion-option>\n                <ion-option value="genesis">Sega Genesis</ion-option>\n                <ion-option value="saturn">Sega Saturn</ion-option>\n                <ion-option value="snes">SNES</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </div>\n  		</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3>\n        <div id="padre" class="padd-txt-sel">\n         <div id="hijo" class="lbl-select">Prueba</div>\n        </div>\n      </ion-col>\n      <ion-col col-9>\n        <div id="padre-select">\n          <ion-list class="sombra-general" id="hijo">\n            <ion-item style="padding-left: 0;">\n              <ion-select [(ngModel)]="gaming" interface="popover" cancelText="Cancelar" placeholder="Seleccione...">\n                <ion-option value="nes">NES</ion-option>\n                <ion-option value="n64">Nintendo64</ion-option>\n                <ion-option value="ps">PlayStation</ion-option>\n                <ion-option value="genesis">Sega Genesis</ion-option>\n                <ion-option value="saturn">Sega Saturn</ion-option>\n                <ion-option value="snes">SNES</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <br>\n\n  <div align="center">\n    <button ion-button class="btn-alone" color="light" round>\n      <div style="font-size: 3.3vw">Ingresar</div>\n    </button>\n  </div>\n\n</ion-content>`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\descripcion\descripcion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DescripcionPage);
    return DescripcionPage;
}());

//# sourceMappingURL=descripcion.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrarsePage = (function () {
    function RegistrarsePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistrarsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarsePage');
    };
    RegistrarsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrarse',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\registrarse\registrarse.html"*/`<ion-content class="login">\n\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<img src="img/Logo2.png" class="logo" />\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-form">\n		<ion-row>\n			<ion-col col-12>\n				<ion-input placeholder="Nombres" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input type="password" placeholder="Apellidos" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Rut" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-row>\n					<ion-col col-4 no-padding>\n						<ion-list>\n				            <ion-item style="padding-left: 0;" class="select-rg">\n				              <ion-select [(ngModel)]="dia" interface="popover" cancelText="Cancelar" placeholder="Día...">\n				                <ion-option value="nes">01</ion-option>\n				                <ion-option value="n64">02</ion-option>\n				                <ion-option value="ps">03</ion-option>\n				                <ion-option value="genesis">04</ion-option>\n				                <ion-option value="saturn">05</ion-option>\n				                <ion-option value="snes">06</ion-option>\n				              </ion-select>\n				            </ion-item>\n			          	</ion-list>\n					</ion-col>\n					<ion-col col-4 no-padding>\n						<ion-list>\n				            <ion-item style="padding-left: 0;" class="select-rg">\n				              <ion-select [(ngModel)]="mes" interface="popover" cancelText="Cancelar" placeholder="Mes...">\n				                <ion-option value="nes">01</ion-option>\n				                <ion-option value="n64">02</ion-option>\n				                <ion-option value="ps">03</ion-option>\n				                <ion-option value="genesis">04</ion-option>\n				                <ion-option value="saturn">05</ion-option>\n				                <ion-option value="snes">06</ion-option>\n				              </ion-select>\n				            </ion-item>\n			          	</ion-list>\n					</ion-col>\n					<ion-col col-4 no-padding>\n						<ion-list>\n				            <ion-item style="padding-left: 0;" class="select-rg-2">\n				              <ion-select [(ngModel)]="anio" interface="popover" cancelText="Cancelar" placeholder="Año...">\n				                <ion-option value="nes">1994</ion-option>\n				                <ion-option value="n64">1995</ion-option>\n				                <ion-option value="ps">1996</ion-option>\n				                <ion-option value="genesis">1997</ion-option>\n				                <ion-option value="saturn">1998</ion-option>\n				                <ion-option value="snes">1999</ion-option>\n				              </ion-select>\n				            </ion-item>\n			          	</ion-list>\n					</ion-col>\n				</ion-row>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Email" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Clave" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Dirección" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Telefóno" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Estatura" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-input placeholder="Peso" class="input-txt"></ion-input>\n			</ion-col>\n			<ion-col col-12>\n				<ion-list>\n		            <ion-item style="padding-left: 0;" class="select-rg-2">\n		              <ion-select [(ngModel)]="nacionalidad" interface="popover" cancelText="Cancelar" placeholder="Nacionalidad">\n		                <ion-option value="nes">1994</ion-option>\n		                <ion-option value="n64">1995</ion-option>\n		                <ion-option value="ps">1996</ion-option>\n		                <ion-option value="genesis">1997</ion-option>\n		                <ion-option value="saturn">1998</ion-option>\n		                <ion-option value="snes">1999</ion-option>\n		              </ion-select>\n		            </ion-item>\n	          	</ion-list>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-btn">\n		<ion-row>\n			<ion-col col-12>\n				<button class="btn-principal">Registrarse</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\registrarse\registrarse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegistrarsePage);
    return RegistrarsePage;
}());

//# sourceMappingURL=registrarse.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarClavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecuperarClavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperarClavePage = (function () {
    function RecuperarClavePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecuperarClavePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarClavePage');
    };
    RecuperarClavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperar-clave',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\recuperar-clave\recuperar-clave.html"*/`<ion-content class="login">\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<img src="img/Logo2.png" class="logo" />\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n\n	<ion-grid class="margin-form">\n		<ion-row>\n			<ion-col col-12>\n				<ion-item class="input-txt">\n					<ion-label color="light"><ion-icon name="person"></ion-icon></ion-label>\n				    <ion-input placeholder="Nombre de Usuario" class="input-txt"></ion-input>\n			  	</ion-item>\n			</ion-col>\n			<ion-col col-12>\n				<ion-item class="input-txt">\n				    <ion-label color="light"><ion-icon name="lock"></ion-icon></ion-label>\n				    <ion-input type="password" placeholder="Clave" class="input-txt"></ion-input>\n			  	</ion-item>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	\n</ion-content>\n`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\recuperar-clave\recuperar-clave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecuperarClavePage);
    return RecuperarClavePage;
}());

//# sourceMappingURL=recuperar-clave.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(105);
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
    function HomePage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\DELL\ionicSports\ionicSports\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar color="menu">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>BSPORTS</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n    <ion-grid id="gridSuperior">\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <div id="padre" style="margin-left: 1.5vw;">\n\n          <div id="hijo" style="font-size: 4.5vw; font-weight: bold;">Deporte</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <div id="padre-select">\n\n            <ion-list id="hijo">\n\n              <ion-item style="padding-left: 0;">\n\n                <ion-select [(ngModel)]="gaming" interface="action-sheet" cancelText="Cancelar" placeholder="Seleccione...">\n\n                  <ion-option value="nes">NES</ion-option>\n\n                  <ion-option value="n64">Nintendo64</ion-option>\n\n                  <ion-option value="ps">PlayStation</ion-option>\n\n                  <ion-option value="genesis">Sega Genesis</ion-option>\n\n                  <ion-option value="saturn">Sega Saturn</ion-option>\n\n                  <ion-option value="snes">SNES</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  <!-- SECCION CENTRAL -->\n\n  <ion-grid id="contenedor-video-actual">\n\n    <ion-row>\n\n      <ion-col col-9 id="columna-video-actual">\n\n        <img id="btn_play" src="img/btn_play.png"/>\n\n      </ion-col>\n\n\n\n      <!-- VIDEOS LATERALES -->\n\n      <ion-col col-3 id="columna-ejemplos">\n\n        \n\n          <div align="center" id="padre">\n\n		  \n\n            <div id="hijo">\n\n		          Ejemplos:\n\n              <img src="img/Velocidad.jpg" style="width: 90%; height: 20vw;"/><br>\n\n              <img src="img/Gambeta.jpg" style="width: 90%; height: 20vw;"/><br>\n\n              <img src="img/Gambeta.jpg" style="width: 90%; height: 20vw;"/>\n\n            </div>\n\n          </div>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <!-- SECCION MIS VIDEOS -->\n\n  <h4 class="font-title" id="misvideos">Mis Videos</h4>\n\n\n\n  <div class="hr"></div>\n\n\n\n  <div class="bg-vid">\n\n  <!-- BOTONES -->\n\n  <ion-grid no-padding class="margin-top-2">\n\n    <ion-row>\n\n      <ion-col col-5>\n\n        <button menuToggle ion-button color="light" round icon-left class="btn-vid"><ion-icon name="film">   \n\n        </ion-icon>Grabar Vídeo</button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button ion-button color="light" round icon-left class="btn-vid"><ion-icon name="albums">\n\n        </ion-icon>Cargar Archivo</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- VIDEOS -->\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card class="sombra-general">\n\n          <img src="img/Gambeta.jpg" class="img-vid-small"/>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">Regate</div>\n\n                <div class="card-subtitle vid-font-small">16/11/2017</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo"> \n\n                    <ion-icon name="more" class="vid-icon" (click)="presentPopover($event)"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card class="sombra-general">\n\n          <img src="img/Velocidad.jpg" class="img-vid-small"/>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">Velocidad</div>\n\n                <div class="card-subtitle vid-font-small">22/11/2017</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon" (click)="presentPopover($event)"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card class="sombra-general">\n\n          <img src="img/Gambeta.jpg" class="img-vid-small"/>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">São Paulo</div>\n\n                <div class="card-subtitle vid-font-small">41 Listings</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon" (click)="presentPopover($event)"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card class="sombra-general">\n\n          <img src="img/Gambeta.jpg" class="img-vid-small"/>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-10>\n\n                <div class="card-title vid-font">São Paulo</div>\n\n                <div class="card-subtitle vid-font-small">41 Listings</div>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <div id="padre">\n\n                  <div id="hijo">\n\n                    <ion-icon name="more" class="vid-icon" (click)="presentPopover($event)"></ion-icon>\n\n                  </div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </ion-col>\n\n   </ion-row>\n\n  </ion-grid>\n\n  </div>\n\n\n\n</ion-content>`/*ion-inline-end:"C:\Users\DELL\ionicSports\ionicSports\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map