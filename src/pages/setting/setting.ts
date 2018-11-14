import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnloadPage } from '../onload/onload';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SettingPage');
  }
  goOnload(){
    this.app.getRootNavs()[0].setRoot(OnloadPage);
  }
}
