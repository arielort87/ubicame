import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  constructor(private vehicul: AutosService) { }
  autos: any[];
  busicon
    ngOnInit() {
    this.vehicul.getPosCar().subscribe((data:any[]) => {
      this.autos = []
      console.log(data)
      for (let i = 0; i < data.length; i++){
        let fecha = data[i].trama["fecsis"]
      let anio = fecha.substr(0,4)
      let mes = fecha.substr(4,2)
      let dia = fecha.substr(6,2)
      let ff = anio +'-'+ mes +'-'+ dia
      

      if(data[i].trama['indmod'] == 1 ){
        this.busicon = '../../../assets/images/br.png'
      }else if (data[i].trama['indmod'] == 2){
        this.busicon = '../../../assets/images/bv.png'
      }else if (data[i].trama['indmod'] == 3){
        this.busicon = '../../../assets/images/ba.png'
      }else{
        this.busicon = '../../../assets/images/br.png'
      }
      
      this.vehicul.conDire(data[i].trama['lat'], data[i].trama['log']).subscribe((datadir:any[])=>{
        var km
        var f = new Date();
        var fecha = f.getFullYear() + "" + (f.getMonth() +1) + "" + f.getDate()
        this.vehicul.getubicacionveh(fecha, data[i].vehiculo['veh_imeigps'], '00:00:00', '23:59:59').subscribe((datakm:any[]) => {
          let lat1 = 0;
          let lon1 = 0;
          let totDis = 0;
          var d

          for (let o = 0; o < datakm.length; o++) {
            if(lat1 == 0 && lon1 == 0){
              lat1 = datakm[o].lat;
              lon1 = datakm[o].log;
            }else{
              let lat2 = datakm[o].lat;
              let lon2 = datakm[o].log;
      
              var R = 6378.137;//Radio de la tierra en km
              var dLat = this.rad(lat2 - lat1);
              var dLong = this.rad(lon2 - lon1);
              var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
              var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              d = R * c;
              lat1 = datakm[o].lat;
              lon1 = datakm[o].log;
              totDis = totDis + d
              
            }
          }
          km = totDis.toFixed(3)
          const aut = {
            icono: this.busicon,
            fecha: ff,
            placa:data[i].vehiculo["veh_placa"],
            idgps:data[i].trama['idgps'],
            dire: `${datadir['municipio']}/${datadir['dpto']}`,
            odometro: km,
            hora: data[i].trama['hora'],
          }
  
          var r = this.autos.push(aut)
        })
      })
      


      }
    })
  }


rad(x) {return x * Math.PI / 180;}

}
