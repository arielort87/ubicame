import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModhistorialPage } from 'src/app/modales/modhistorial/modhistorial.page';
import { AutosService } from 'src/app/services/autos.service';
import * as L from 'leaflet'

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  constructor(private modalCtrl: ModalController, private serVeh: AutosService, public toastController: ToastController) { 
  }
  mapa
  map

  ngOnInit() {

  }
  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }

  async abrBusc(){
    const modal = await this.modalCtrl.create({
      component: ModhistorialPage,
      cssClass: 'my-custom-class'
    })
  
    await modal.present();
    
    const { data } = await modal.onDidDismiss();
    if(data.cancelar == 0){
      this.tramarc(data.dia, data.bus, data.hi, data.hf)
    }else{
      this.presentToast('no seleeciono ningun valor')
    }
    
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
    iconAnchor:   [8, 29], // point of the icon which will correspond to marker's location
    popupAnchor:  [6, -29] // point from which the popup should open relative to the iconAnchor
  });
  markdores:any
  dt:any
  busicon
  cant:number = 0
  a
  tramarc(fecha, imei, hi, hf){
    this.serVeh.getubicacionveh(fecha, imei, hi, hf).subscribe(data  =>{
      //var ne = []

      this.a =data
      //for(let e  = 0; e < 100; e++){
      //  var h = ne.push(data[e])
      //}
      //console.log(ne)
      

      document.getElementById('map-box2').innerHTML = "<div id='map2' style='width: 100%; height: 100%;'></div>";

      this.map = L.map('map2').setView([51.505, -0.09], 18);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.mapa = this.map;
      
      this.dt = data
      this.cant = this.dt.length
      var arr = []; 
      

      for (let i = 0; i < this.dt.length; i++) {
        let c = this.cant - i

        let fecha = this.dt[i].fecha
        let anio = fecha.substr(0,4)
        let mes = fecha.substr(4,2)
        let dia = fecha.substr(6,2)
        let ff = anio +'-'+ mes +'-'+ dia
        if(this.dt[i].indmod == 1 ){
          this.busicon = this.busR
        }else if (this.dt[i].indmod == 2){
          this.busicon = this.busV
        }else{
          this.busicon = this.busA
        }
        let marker = L.marker([this.dt[i].lat, this.dt[i].log], {icon: this.busicon}).addTo(this.mapa)
        .bindPopup(`<b>Indicador:${c} </b><br>
                    <b>Hora: </b> ${this.dt[i].hora}`).openPopup();
        var r = arr.push(marker)
      }

      this.markdores = arr;
      var group = new L.FeatureGroup(this.markdores);

      this.mapa.fitBounds(group.getBounds());

    })
  }
  

}
