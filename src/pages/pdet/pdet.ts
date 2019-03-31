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
    this.data=10987;
    let body={
      id:this.data
    }
    this.http.post("http://localhost:5060/qr",body).subscribe((res)=>{
      console.log(res.json());
      

       this.detail.id=res.json()[0].id;

        this.detail.name=res.json()[0].name;
        this.detail.age=res.json()[0].age;
        this.detail.bg=res.json()[0].bg;
        this.detail.mob=res.json()[0].mobile;
        this.detail.hg=res.json()[0].hg;
        this.detail.rbc=res.json()[0].rbc;
        this.detail.wbc=res.json()[0].wbc;
        this.detail.bp=res.json()[0].bp;
        this.detail.insulin=res.json()[0].insulin;
        this.detail.dis1=res.json()[0].dis1;
        this.detail.dis2=res.json()[0].dis2;

        this.detail.dis3=res.json()[0].dis3;






        console.log(res.json()[0].name);

      
    })
    
    // console.log(this.data);

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
