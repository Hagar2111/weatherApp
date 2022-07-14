import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _weatherService: WeatherService){}

  weatherData?: weatherData;
  cityName:string = 'Cairo';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName:string){
    this._weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {

        this.weatherData = response;
        console.log(response);
      }
    });
  }
  title = 'weatherApp';
}
