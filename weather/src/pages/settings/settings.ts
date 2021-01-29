import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	city: string;
	country_code: string;
  constructor(public navCtrl: NavController, 
  		public navParams: NavParams,
  		private storage:Storage
  	) 
    {
        
        this.storage.get('location').then((val) =>
      {
        if(val != null)
        { 
          let location = val;
          this.city = location.city;
          this.country_code = location.country_code;


        }
        else
        {
            this.city='chennai';
            this.country_code ='in';

        }

  });

  	}
		
  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad SettingsPage');
  }


  saveform()
  {
  	let location =
  	{
  	city:this.city,
  	country_code:this.country_code
  	}
  	this.storage.set('location',location);
    this.navCtrl.push(HomePage);

  }

}

/*this.storage.set('location',location);
    this.navCtrl.push(Homepage);
    console.log(location);*/





