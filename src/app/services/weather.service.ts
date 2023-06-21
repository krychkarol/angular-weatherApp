import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/forecast.json', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Key', '7f0010260emsh738a93f43fd7106p1136abjsn41f1f8632354')
      .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com'),
      params: new HttpParams()
      .set('q', city)
    })
  }
}
