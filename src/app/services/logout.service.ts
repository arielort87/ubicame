import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor( private http: HttpClient ) { }
  API_URL = "http://45.79.30.197:3000/api"

  validartoken(){
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization',  'Bearer ' + token);
    return this.http.get(`${this.API_URL}/vehiculo/localizacion`, { headers: headers });
  }
}
