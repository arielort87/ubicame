import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  constructor( private http: HttpClient ) { }
  API_URL = "http://45.79.30.197:3000/api"

  getEvents(fecha,tipo){
    return this.http.get(`${this.API_URL}/evento?fecha=${fecha}&tipo=${tipo}`);
  } 
  getAlert(tipo, limit){
    return this.http.get(`${this.API_URL}/evento?tipo=${tipo}&limit=${limit}`);
  }

  getubicacionveh(fecha, imei, hi, hf){
    return this.http.get(`${this.API_URL}/trama?fecha=${fecha}&imei=${imei}&horai=${hi}&horaf=${hf}`);
  }

  getPosCar(){
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization',  'Bearer ' + token);
    return this.http.get( `${this.API_URL}/vehiculo/localizacion`, { headers: headers });
  }

  conDire(lat, long){
    return this.http.get(`${this.API_URL}/trama/geocoder/reverse?lat=${lat}&lon=${long}`);
  }
}
