import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private qrScanner: QRScanner) {

  }
scan(){
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted

       this.qrScanner.show();
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        
        // this.qrScanner.enableLight();
         console.log('Scanned something', text);
         this.qrScanner.hide().then(()=>{
          alert(text);
          scanSub.unsubscribe();
         })


        // this.qrScanner.hide(); // hide camera preview
         // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
}

}
