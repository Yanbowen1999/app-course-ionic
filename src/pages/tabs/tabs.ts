import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { APage} from '../a/a';
import { AddPage } from '../add/add';
import { CPage } from '../c/c';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CPage;
  tab4Root = ContactPage;
  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad() {
    if(document.querySelector('#tab-t0-2')){
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal=this.modalCtrl.create(AddPage);
      profileModal.present();
    },false)
    }
  }
}
