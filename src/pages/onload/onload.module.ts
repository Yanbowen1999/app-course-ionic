import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnloadPage } from './onload';

@NgModule({
  declarations: [
    OnloadPage,
  ],
  imports: [
    IonicPageModule.forChild(OnloadPage),
  ],
})
export class OnloadPageModule {}
