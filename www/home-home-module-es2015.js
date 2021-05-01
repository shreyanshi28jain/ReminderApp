(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n   <ion-toolbar>\r\n      <img src=\"../../assets/icon.jfif\" class=\"remImg\">\r\n    <ion-title class=\"head\">\r\n     \r\n         NoteBook!\r\n    </ion-title>\r\n   </ion-toolbar>\r\n   <ion-buttons end>\r\n      <ion-button color=\"danger\" *ngIf=\"notificationExists\"  icon-only (click)=\"cancelNotification(1)\">\r\n         <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n         Cancel</ion-button>\r\n      <!-- <button *ngIf=\"notificationExists\" ion-button icon-only (click)=\"cancelNotifications(1)\"  class=\"btn btn-danger\">\r\n         <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon> Cancel\r\n      </button> -->\r\n   </ion-buttons>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n   <div margin-top margin-bottom>\r\n      <img src=\"../../assets/homepage.jfif\" class=\"homePage\">\r\n      <p>\r\n         Set Reminder!\r\n      </p>\r\n\r\n     <form [formGroup]=\"form\" >\r\n       <ion-list>\r\n           <ion-item margin-bottom>\r\n             <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Enter Heading\"\r\n                clearInput=true\r\n                [(ngModel)]=\"notification\"\r\n                formControlName=\"notification\">\r\n            </ion-input>\r\n          </ion-item>\r\n            <ion-item margin-bottom>\r\n             <ion-textarea placeholder=\"Enter Message \" clearInput=true [(ngModel)]=\"summary\" formControlName=\"summary\">\r\n            </ion-textarea>\r\n          </ion-item>\r\n\r\n\r\n          <span\r\n             ion-button\r\n             block\r\n             padding\r\n             color=\"secondary\"\r\n             (click)=\"selectDateForScheduling()\"\r\n              margin-bottom>Select Reminder date/time</span>\r\n<br>\r\n          <input\r\n             type=\"text\"\r\n             formControlName=\"published\"\r\n             [(ngModel)]=\"published\" *ngIf=\"published != ''\" placeholder=\"select date\" disabled>\r\n\r\n             <ion-button  text-center  [disabled]=\"!form.valid\" (click)=\"generateReminder()\">Create Reminder</ion-button>\r\n             <!-- <button\r\n              class=\"btn btn-primary\"\r\n                text-center\r\n               [disabled]=\"!form.valid\">Create notification</button> -->\r\n        </ion-list>\r\n     </form>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".remImg {\n  position: absolute;\n  top: 1px;\n  left: 15px;\n}\n\n.homePage {\n  width: 373px;\n  height: 132px;\n}\n\n.head {\n  position: relative;\n  top: -2px;\n  left: 47px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9HOlxcQ2hlZ2cgU29sdXRpb25cXE5vb3Rib29rIGlvbmljIGFwcFxcTm90ZUJvb2svc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtSW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG59XHJcbi5ob21lUGFnZXtcclxuICAgIHdpZHRoOiAzNzNweDtcclxuICAgIGhlaWdodDogMTMycHg7XHJcbn1cclxuLmhlYWR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBsZWZ0OiA0N3B4O1xyXG59XHJcbiIsIi5yZW1JbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uaG9tZVBhZ2Uge1xuICB3aWR0aDogMzczcHg7XG4gIGhlaWdodDogMTMycHg7XG59XG5cbi5oZWFkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDQ3cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






let HomePage = class HomePage {
    constructor(navCtrl, _ALERT, _FB, _DATE, _LOCAL, _PLAT) {
        this.navCtrl = navCtrl;
        this._ALERT = _ALERT;
        this._FB = _FB;
        this._DATE = _DATE;
        this._LOCAL = _LOCAL;
        this._PLAT = _PLAT;
        this.published = '';
        this.notificationExists = false;
        this.form = this._FB.group({
            notification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            summary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            published: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ionViewDidLoad() {
        this._PLAT.ready().then(() => {
            this._LOCAL.on('click').subscribe(notification => {
                var title = notification.title, message = JSON.parse(notification.data);
                this.displayAlert(title, message.message);
                if (this.notificationExists) {
                    this.notificationExists = false;
                }
            });
        });
    }
    scheduleNotification(notification, message, published) {
        this._LOCAL.schedule({
            id: 1,
            title: 'Reminder!',
            text: notification,
            at: published,
            data: { message: message }
        });
        if (this._LOCAL.isScheduled(1)) {
            this.notificationExists = true;
            this.displayAlert('Congratulations', 'Your notification has been successfully scheduled');
        }
        else {
            this.displayAlert('Yikes!', 'Notification failed. Please try again');
        }
    }
    cancelNotification(id) {
        debugger;
        this._LOCAL.cancel(id).then((data) => {
            debugger;
            this.notificationExists = false;
            this.displayAlert('Success', 'All notifications have been cancelled');
        })
            .catch((error) => {
            this.displayAlert('Error', error);
        });
    }
    selectDateForScheduling() {
        this._DATE.show({
            titleText: 'Select a date/time for this notification to be published', todayText: 'Select date',
            nowText: 'Select time',
            date: new Date(),
            mode: 'datetime',
            androidTheme: this._DATE.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
            allowOldDates: false,
            allowFutureDates: true
        })
            .then((date) => {
            this.published = date;
        })
            .catch((err) => {
            this.displayAlert('Error', err);
        });
    }
    generateReminder() {
        debugger;
        let notification = this.form.controls['notification'].value, summary = this.form.controls['summary'].value, published = this.published;
        this.scheduleNotification(notification, summary, published);
        this.clearForm();
    }
    displayAlert(title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this._ALERT.create({
                header: title, subHeader: message,
                buttons: ['Got it']
            });
            yield alert.present();
        });
    }
    clearForm() {
        this.form.reset();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map