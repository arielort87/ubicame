import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
baseUrl = "http://45.79.30.197:3000/";
  constructor( private http: HttpClient ) { }


  getEvents(fecha,tipo){
    return this.http.get(`${this.baseUrl}api/evento?fecha=${fecha}&tipo=${tipo}`);
  } 
  getAlert(tipo, limit){
    return this.http.get(`${this.baseUrl}api/evento?tipo=${tipo}&limit=${limit}`);
  }
}
