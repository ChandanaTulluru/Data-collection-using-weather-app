import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';
import {DetailsPage } from '../details/details';
import {ChartsPage } from '../charts/charts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	weather:any;
	location:
	{
	city:string,
	country_code:string;
	}
	temp:string;
  	imgurl:string;

  constructor(
  		public navCtrl: NavController , 
  		private weatherProvider:WeatherProvider,
  		private storage:Storage

  ) {

  }

  ionViewWillEnter()
  {
  		this.storage.get('location').then((val) =>
  		{
  		if(val != null)
  		{
          this.location = val;  
  		}
  		else
  		{
		  	this.location=
        {
          city:'chennai',
          country_code:'in'
        }


  		}

      this.weatherProvider.getWeather(this.location.city,this.location.country_code).subscribe(weather => 
   {this.weather = weather, this.imgurl = 'http://openweathermap.org/img/w/'+this.weather.weather[0].icon+'.png',console.log(this.weather)});


  		});
      
  		
  			

	


	  
	  
  }

showDetails()
{
  this.navCtrl.push(DetailsPage);
}
chartDetails()
{
  this.navCtrl.push(ChartsPage);
}

}
