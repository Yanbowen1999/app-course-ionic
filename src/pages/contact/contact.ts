import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(SettingPage);
  }
}
