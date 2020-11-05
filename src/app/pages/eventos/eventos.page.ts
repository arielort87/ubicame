import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private infAut:AutosService, public toastController: ToastController) { 
  }
  visu:boolean = false
      ngOnInit() {}
  eventos: any[];
  traerEvent(fecha, veh){
    this.infAut.getEvents(fecha, veh).subscribe((data:any[])=>{
      
      if(data.length == 0){
        this.presentToast('no se encontraron registros en la base de datos para esta fecha')
        this.eventos = []
        this.visu = false;
      }else{
        this.eventos = data;
        this.visu = true;
      }
      console.log(this.eventos)
    },
    (error)=>{
      console.error(error);
    }
    )
  }

  
  fecha;
  vehicul

  validarform(){
    if(this.fecha != null){
      if(this.vehicul != '' || this.vehicul != null){
        let f = this.fecha
        let cf = f.substr(0,10)
        let cff = cf.replace('-', '')
        this.traerEvent(cff.replace('-', ''), this.vehicul)
      }else{this.presentToast('El vehiculo es un campo requerido')}
    }else{this.presentToast('La fecha es un campo requerido')}
    
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }


}
