import { Component } from '@angular/core';
//import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { WeatherProvider } from '../../providers/weather/weather';
import { Http ,  Headers} from '@angular/http';  
import { Chart } from 'chart.js';


import { HomePage } from '../home/home';


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})


export class ChartsPage {

	weather:any;
	location:
	{
	city:string,
	country_code:string;
	}
	temp:string;
  	imgurl:string;

	chart = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	
  	private weatherProvider:WeatherProvider,
  	
  )
   {
  }

  ionViewWillEnter()
  {
       this.weatherProvider.getWeather('sullurpeta','in').subscribe(res=>{
          
          let temp_max = res.main.temp_max - 273
          
          let temp_min = res.main.temp_min - 273
          


            this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ['january','feb','mar'],
            datasets: [
              {
                data: temp_max,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },


            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      
          console.log(res)

       })


	     
	  
  }


  ionViewDidLoad() {

  	console.log("loaded");	
  }

}





    
  		
  			

	

