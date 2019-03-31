import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';
import { Http } from '@angular/http';

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
  id:any;
  hg:any;
  wbc:any;
  rbc:any;
  bp:any;
  insulin:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider,public http:Http) {
this.hg=this.detail.hg;
this.id=this.detail.id;
this.hg=this.detail.hg;
this.rbc=this.detail.rbc;
this.wbc=this.detail.wbc;
this.bp=this.detail.bp;
this.insulin=this.detail.insulin;




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrepPage');
  }
send()
{
  let body={
    hg:this.hg,
    id:this.id,
    rbc:this.rbc,
    wbc:this.wbc,
    bp:this.bp,
    insulin:this.insulin
  }

  this.http.post("http://localhost:5060/report",body).subscribe((res)=>{
    res.json();
    alert("Reports have been updated");
    this.navCtrl.pop();
  })
}
}
