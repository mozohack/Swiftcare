import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtaPage } from './ota';

@NgModule({
  declarations: [
    OtaPage,
  ],
  imports: [
    IonicPageModule.forChild(OtaPage),
  ],
})
export class OtaPageModule {}
