import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

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

 
  


}
