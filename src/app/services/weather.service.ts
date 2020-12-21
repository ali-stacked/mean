import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import * as moment from 'moment';
const apiKey: string = environment.weatherApiKey;
@Injectable()
export class WeatherService {


  constructor(private http: HttpClient) {}

  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.weatherApiKey}/weather?q=${loc}&appid=${apiKey}`)
  }
  getForecast(loc: string) {
    return this.http.get(`${environment.weatherApiKey}/forecast?q=${loc}&appid=${apiKey}`)
  }
  getUv(lat: number, lon: number) {
    let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
    let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
    return this.http.get(`${environment.weatherApiKey}/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}`)
  }

}
