import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as L from 'leaflet'
import { AutosService } from 'src/app/services/autos.service';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor( private router:Router,private menuCtrl: MenuController,public loadingController: LoadingController , private hubiCar: AutosService ) { 
    this.markdores = []; 
    let token = localStorage.getItem('token');
    if(token != null){
      this.reca(); 
    }else{
      this.router.navigate(['/'])
    }
    }
  mapa:any
  traerVeh(){
    this.hubiCar.getPosCar().subscribe((data:any[])=>{
      console.log(data);
      var map = L.map('map').setView([data[0].trama["lat"], data[0].trama["log"]], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.mapa = map
      this.prinMarker(data)
      console.log('traervehicul', data)
    })
  }
  busV = L.icon({
      iconUrl: "../../../assets/images/marcadorbusV.png",
      iconSize:     [23, 28], // size of the icon
      iconAnchor:   [7, 29], // point of the icon which will correspond to marker's location
      popupAnchor:  [6, -29] // point from which the popup should open relative to the iconAnchor
  });
  busR = L.icon({
    iconUrl: "../../../assets/images/marcadorbusR.png",
    iconSize:     [23, 28], // size of the icon
    iconAnchor:   [7, 29], // point of the icon which will correspond to marker's location
    popupAnchor:  [6, -29] // point from which the popup should open relative to the iconAnchor
  });
  busA = L.icon({
    iconUrl: "../../../assets/images/marcadorbusA.png",
    iconSize:     [23, 28], // size of the icon
    iconAnchor:   [7, 29], // point of the icon which will correspond to marker's location
    popupAnchor:  [6, -29] // point from which the popup should open relative to the iconAnchor
  });
  busicon
  markdores:any
  prinMarker(data:any){
    var arr = [];  
    
    if(this.markdores && this.markdores.length){
      for(let i = 0; i < this.markdores.length; i++){
        this.mapa.removeLayer(this.markdores[i]);
      }
    }
    

    for (let i = 0; i < data.length; i++) {
      let fecha = data[i].trama["fecha"]
      let anio = fecha.substr(0,4)
      let mes = fecha.substr(4,2)
      let dia = fecha.substr(6,2)
      let ff = anio +'-'+ mes +'-'+ dia
      if(data[i].trama['indmod'] == 1 ){
        this.busicon = this.busR
      }else if (data[i].trama['indmod'] == 2){
        this.busicon = this.busV
      }else{
        this.busicon = this.busA
      }
      let marker = L.marker([data[i].trama["lat"], data[i].trama["log"]], {icon: this.busicon}).addTo(this.mapa)
      .bindPopup(`<b>Interno: </b>${data[i].vehiculo["veh_interno"]}</br>
                  <b>Placa: </b>${data[i].vehiculo["veh_placa"]}</br>
                  <b>Fecha: </b>${ff}</br>
                  <b>Hora: </b>${data[i].trama["horsis"]}</br>
                  <b>Km/h: </b>${data[i].trama["kmh"]}</br>`).openPopup();
      var r = arr.push(marker)
    }
    this.markdores = arr;
    //var group = new L.FeatureGroup(this.markdores);

    //this.mapa.fitBounds(group.getBounds());
    this.recargarfun()
  }
  async reca() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere...',
      duration: 2000
    });
    await loading.present();
    this.traerVeh()
    const { role, data } = await loading.onDidDismiss();
  }
  
  recargarfun() {
    setInterval(()=>{
    this.hubiCar.getPosCar().subscribe((data:any[])=>{
      this.prinMarker(data)
    },(error)=>{
      console.error(error);
      this.router.navigate(['/'])
    })
    },3 * 100000);
  }
  toggleMenu(){
  this.menuCtrl.toggle();
  }

  ngOnInit() {  
  }

}
