import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';
/**
 * Generated class for the PdetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: "pdet"
  }
)
@Component({
  selector: 'page-pdet',
  templateUrl: 'pdet.html',
})
export class PdetPage {
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider) {
    this.data=navParams.get('data');
    {}
    console.log(this.data);
    // this.detail.det.id=this.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdetPage');
  }

}
