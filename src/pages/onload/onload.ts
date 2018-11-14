import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';
import { BPage } from '../b/b';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OnloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onload',
  templateUrl: 'onload.html',
})
export class OnloadPage {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad OnloadPage');
  }
  goload(){
    this.navCtrl.push(BPage);
  }
  goTabs(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
}
