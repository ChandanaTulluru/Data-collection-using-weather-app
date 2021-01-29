import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherProvider {

	apikey='56bea3e911fa8212b6a2b35ea185fda9';
	url;	
  
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url='https://api.openweathermap.org/data/2.5/weather?appid='+this.apikey+'&q=';
    //console.log(this.url + city + ',' + country_code).map(res=>res));
  }

  	getWeather(city,country_code)
  	{
  	return this.http.get(this.url + city + ',' + country_code).map(res=>res);
  	}

}
