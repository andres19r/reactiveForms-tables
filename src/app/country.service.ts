import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    const params = new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population')
    return this.http.get(this.baseUrl, { params })
  }
}
