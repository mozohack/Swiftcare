import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {
det=
  {
    id:"12345",
    name: "Shivang Kaul",
    blood: "O+"
  }

  constructor(public http: Http) {
    console.log('Hello DetailsProvider Provider');
  }

}
