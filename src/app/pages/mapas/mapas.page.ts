import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as L from 'leaflet'
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor( private router:Router, private hubiCar: AutosService ) { this.traerVeh();}
  mapa:any
  traerVeh(){
    this.hubiCar.getPosCar().subscribe((data:any[])=>{
      var map = L.map('map').setView([data[0].trama["lat"], data[0].trama["log"]], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.mapa = map
      this.prinMarker(data)
    })
  }
  busicon = L.icon({
      iconUrl: "../../../assets/images/marcadorbus.png",
      iconSize:     [23, 28], // size of the icon
      iconAnchor:   [7, 29], // point of the icon which will correspond to marker's location
      popupAnchor:  [6, -29] // point from which the popup should open relative to the iconAnchor
  });
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

  
recargarfun() {
  setInterval(()=>{
    this.hubiCar.getPosCar().subscribe((data:any[])=>{
      this.prinMarker(data)
    })
  },3 * 100000);
}
  
  ngOnInit() {   
  }

}
