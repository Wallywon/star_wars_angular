import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root',                                             
})
export class SwapiService {
  private apiUrl = 'https://swapi.py4e.com/api/';

  constructor(private http: HttpClient) {}

  getPlanets(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets?page=${page}`);
  }
  getResidents(urls: string[]): Observable<any[]> {
    return forkJoin(urls.map(url => this.http.get(url)));
  }
}


