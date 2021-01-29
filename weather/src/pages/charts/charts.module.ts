import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartsPage } from './charts';
import {Chart} from 'chart.js'
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [
    ChartsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartsPage),
    
  ],
})
export class ChartsPageModule {
	


}
