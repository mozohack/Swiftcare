import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailsProvider {
id:any;
name:any;
bg:any;
age:any;
mob:any;
hg:any;
rbc:any;
wbc:any;
bp:any;
insulin:any;
dis1:any;
dis2:any;
dis3:any;

  constructor(public http: Http) {
    console.log('Hello DetailsProvider Provider');
  }

}
