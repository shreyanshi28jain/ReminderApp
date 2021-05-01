(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-title>\n      Notify Me!\n   </ion-title>\n   <ion-buttons end>\n      <button *ngIf=\"notificationExists\" ion-button icon-only click)=\"cancelNotifications(1)\">\n         <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon> Cancel\n      </button>\n   </ion-buttons>\n</ion-header>\n\n<ion-content padding>\n   <div margin-top margin-bottom>\n      <p>\n         Register a local notification using the form below.\n      </p>\n\n     <form [formGroup]=\"form\" (ngSubmit)=\"generateReminder()\">\n       <ion-list>\n           <ion-item margin-bottom>\n             <ion-input\n                type=\"text\"\n                placeholder=\"Message heading\"\n                clearInput=true\n                [(ngModel)]=\"notification\"\n                formControlName=\"notification\">\n            </ion-input>\n          </ion-item>\n            <ion-item margin-bottom>\n             <ion-textarea placeholder=\"Message content\" clearInput=true [(ngModel)]=\"summary\" formControlName=\"summary\">\n            </ion-textarea>\n          </ion-item>\n\n\n          <span\n             ion-button\n             block\n             padding\n             color=\"secondary\"\n             (click)=\"selectDateForScheduling()\"\n              margin-bottom>Select publishing date/time</span>\n\n          <input\n             type=\"hidden\"\n             formControlName=\"published\"\n             [(ngModel)]=\"published\">\n\n\n             <button\n                ion-button\n                color=\"primary\"\n                text-center\n              block [disabled]=\"!form.valid\">Create notification</button>\n        </ion-list>\n     </form>\n\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _ALERT, _FB, _DATE, _LOCAL, _PLAT) {
        this.navCtrl = navCtrl;
        this._ALERT = _ALERT;
        this._FB = _FB;
        this._DATE = _DATE;
        this._LOCAL = _LOCAL;
        this._PLAT = _PLAT;
        this.notificationExists = false;
        this.form = this._FB.group({
            'notification': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], 'summary': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], 'published': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._PLAT.ready().then(function () {
            _this._LOCAL.on('click').subscribe(function (notification) {
                var title = notification.title, message = JSON.parse(notification.data);
                _this.displayAlert(title, message.message);
                if (_this.notificationExists) {
                    _this.notificationExists = false;
                }
            });
        });
    };
    HomePage.prototype.scheduleNotification = function (notification, message, published) {
        this._LOCAL.schedule({
            id: 1,
            title: 'Heads Up!',
            text: notification,
            at: published,
            data: { message: message }
        });
        if (this._LOCAL.isScheduled(1)) {
            this.notificationExists = true;
            this.displayAlert('Congratulations', 'Your notification has been successfully scheduled');
        }
        else {
            this.displayAlert('Oh-oh!', 'Notification failed. There be gremlins at work here.');
        }
    };
    HomePage.prototype.cancelNotification = function (id) {
        var _this = this;
        this._LOCAL.cancel(id).then(function (data) {
            _this.notificationExists = false;
            _this.displayAlert('Success', 'All notifications have been cancelled');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error);
        });
    };
    HomePage.prototype.selectDateForScheduling = function () {
        var _this = this;
        this._DATE.show({
            titleText: 'Select a date/time for this notification to be published', todayText: 'Select date',
            nowText: 'Select time',
            date: new Date(),
            mode: 'datetime',
            androidTheme: this._DATE.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
            allowOldDates: false,
            allowFutureDates: true
        })
            .then(function (date) {
            _this.published = date;
        })
            .catch(function (err) {
            _this.displayAlert('Error', err);
        });
    };
    HomePage.prototype.generateReminder = function () {
        var notification = this.form.controls['notification'].value, summary = this.form.controls['summary'].value, published = this.published;
        this.scheduleNotification(notification, summary, published);
        this.clearForm();
    };
    HomePage.prototype.displayAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ALERT.create({
                            header: title, subHeader: message,
                            buttons: ['Got it']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clearForm = function () {
        this.notification = '';
        this.summary = '';
        this.published = '';
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map