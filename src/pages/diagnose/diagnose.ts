import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';

/**
 * Generated class for the DiagnosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"diagnose"
})
@Component({
  selector: 'page-diagnose',
  templateUrl: 'diagnose.html',
})
export class DiagnosePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosePage');
  }

}