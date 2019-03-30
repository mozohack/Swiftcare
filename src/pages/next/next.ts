import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "next"
})
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
  }

  cal()
  {this.calendar.createCalendar('MyCalendar').then(
    (msg) => { console.log(msg); },
    (err) => { console.log(err); }
  );}

}
