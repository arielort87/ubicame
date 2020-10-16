import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  baseUrl = "http://45.79.30.197:3000/";
  constructor( private http: HttpClient ) { }

  validartoken(){
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization',  'Bearer ' + token);
    return this.http.get(this.baseUrl + 'api/vehiculo/localizacion', { headers: headers });
  }
}
