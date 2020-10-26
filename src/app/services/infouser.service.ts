import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfouserService {

  constructor( private http: HttpClient) { }

  getMenu(){
    return this.http.get<Componente[]>('/assets/data/menu.json')
  }

  user(postData){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Accept', 'application/json')
                                    .set('Access-Control-Allow-Methods', 'POST')

    return this.http.post("http://45.79.30.197/api/auth/signin", postData, { headers: headers })
  }

  changePass(postData, user){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Accept', 'application/json')
                                    .set('Access-Control-Allow-Methods', 'PUT')

    return this.http.put(`http://45.79.30.197/api/auth/signup/${user}`, postData, { headers: headers })
  }
  
}
