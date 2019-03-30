import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';

/**
 * Generated class for the AddrepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"addrep"
})
@Component({
  selector: 'page-addrep',
  templateUrl: 'addrep.html',
})
export class AddrepPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrepPage');
  }

}
