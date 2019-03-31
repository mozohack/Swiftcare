import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';
import { Http } from '@angular/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ANNOTATIONS } from '@angular/core/src/util/decorators';

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

  disease:any=null;
  meds:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams,public detail:DetailsProvider,public http:Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosePage');
  }
  send()
  {
    if(this.disease==null || this.meds==null)
    {
      alert("Incomplete Data");
    }
    else{
      let body={
        dis1:this.disease,
        dis2:this.detail.dis1,
        dis3:this.detail.dis2,
        id:this.detail.id
        

      }
      this.http.post("http://infigp.in:5060/presc",body).subscribe((res)=>{
        console.log(res.json());
        this.navCtrl.setRoot("pdet");
      });
    console.log(this.disease+" idjfid "+this.meds);
    alert("Prescription Forward Successful!")
  }
  }
}
