import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getubicacionveh(fecha, imei, hi, hf){
    return this.http.get(`${this.baseUrl}api/trama?fecha=${fecha}&imei=${imei}&horai=${hi}&horaf=${hf}`);
  }

  getPosCar(){
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization',  'Bearer ' + token);
    return this.http.get(this.baseUrl + 'api/vehiculo/localizacion', { headers: headers });
  }


  //#ff5a5a
}
