import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { DetailsProvider } from '../providers/details/details';
import { HttpModule } from '@angular/http';
import { Calendar } from '@ionic-native/calendar';
import { slots } from '../pages/slots/slots';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    slots
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    slots
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    DetailsProvider,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
