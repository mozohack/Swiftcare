import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';
import { Http } from '@angular/http';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider,public http: Http) {
    
    

    this.data=navParams.get('data');
    let body={
      id:this.data
    }
    this.http.post("http://localhost:5050/qr",body).subscribe((res)=>{
      console.log(res.json());
      if(res.json().status==200)
      {
        this.detail.det.name=res.json().name;
        this.detail.det.age=res.json().age;
        this.detail.det.bg=res.json().bg;

      }
    })
    
    // console.log(this.data);
    this.detail.det.id=this.data;

  }

  diagnose(){
    this.navCtrl.push("diagnose");
  }
  next(){
    this.navCtrl.push("next");
  }
  addrep(){
    this.navCtrl.push("addrep");
  }
  lastrep(){
    this.navCtrl.push("lastrep");
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdetPage');
  }

}
