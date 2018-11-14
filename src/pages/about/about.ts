import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    
  }
  arr=['客厅','卧室','餐厅','书房','门厅'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  change(){
    //console.log(this.slides.getActiveIndex());
  }
  goSearch(){
    this.navCtrl.push(SearchPage);
  }
}
