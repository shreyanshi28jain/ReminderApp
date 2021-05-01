import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form : FormGroup;
  public notification : string;
  public summary : string;
  public published : any ='';
  public notificationExists : boolean = false;
  public title : string;

constructor(public navCtrl : NavController,
  private _ALERT   : AlertController,
  private _FB      : FormBuilder,
  private _DATE    : DatePicker,
  private _LOCAL   : LocalNotifications,
  private _PLAT    : Platform) {

    this.form = 	this._FB.group({
      notification : ['', Validators.required],
      summary : ['', Validators.required],
      published : ['', Validators.required]
    });
}

ionViewDidLoad() : void {
  
  this._PLAT.ready().then( () => {
    this._LOCAL.on('click').subscribe (notification => {
        var title = notification.title,
        message = JSON.parse(notification.data);

        this.displayAlert(title, message.message);
        
        if (this.notificationExists) {
          this.notificationExists = false;
         }
      });
   });
}

scheduleNotification(notification : string, message : string, published : any) : void
{
this._LOCAL.schedule({
  id : 1,
  title : 'Reminder!',
  text : notification,
  at : published,
  data : { message : message }
});



if(this._LOCAL.isScheduled(1)) {
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

selectDateForScheduling() : void {
  this._DATE.show( {
    titleText : 'Select a date/time for this notification to be published',todayText : 'Select date',
    nowText : 'Select time',
    date : new Date(),
    mode : 'datetime',
    androidTheme : this._DATE.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
      allowOldDates        : false,
      allowFutureDates     : true
   })
  .then((date : any) => {
    this.published 	 = date;
   })
  .catch((err) => {
    this.displayAlert('Error', err);
   });
}

generateReminder() : void {
  debugger;
  let notification : string = this.form.controls['notification'].value,
  summary : string =	this.form.controls['summary'].value, 
  published : string =	this.published;
  this.scheduleNotification(notification, summary, published);
  this.clearForm();
}

async displayAlert(title?, message?) {
  let alert = await this._ALERT.create({
    header : title, subHeader : message,
    buttons : ['Got it']
});

await alert.present();
}

clearForm() : void {
 this.form.reset();
}

}
