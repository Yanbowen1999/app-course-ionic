import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public http:HttpClient) {
    
  }
  // icons:string="tuijian";
  arr=['推荐','家居','餐厨','床上用品'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  change(){}
  goSub(){
    this.navCtrl.push(AboutPage);
  }
}
