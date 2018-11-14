import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {
  icons:string="camera";
  @ViewChild('ac') ac;
  items = [];
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  ionViewDidLoad(){
    this.ac.get();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  doInfinite(infiniteScroll) {
    this.http.get('api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
    // console.log('Begin async operation');

    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }

    //   console.log('Async operation has ended');
    //   infiniteScroll.complete();
    //   if(this.items.length>90){
    //     infiniteScroll.enable();
    //   }
    // }, 500);
  }
}
