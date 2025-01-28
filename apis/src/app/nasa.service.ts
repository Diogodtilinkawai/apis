import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'VM6bYVrsBmV34PQ3twvq3NsRZPMsIdLnPiWKmgaM';
  constructor(private http: HttpClient) { }
  getimageoftheday(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
  getimagebydate(date: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&date=${date}`);
  }

}
