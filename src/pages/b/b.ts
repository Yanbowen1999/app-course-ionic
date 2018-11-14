import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnloadPage } from '../onload/onload';

/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {//有生命周期
    //console.log(this.navParams.get('id'));
  }
  goOnload(){
    this.navCtrl.push(OnloadPage);
  }
}
