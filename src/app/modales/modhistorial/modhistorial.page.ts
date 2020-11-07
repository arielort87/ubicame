import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-modhistorial',
  templateUrl: './modhistorial.page.html',
  styleUrls: ['./modhistorial.page.scss'],
})
export class ModhistorialPage implements OnInit {

  constructor(private modalCtrl: ModalController, private buses: AutosService, public toastController: ToastController) { 
    this.buses.getPosCar().subscribe(data => {
      this.bus = data
    })
  }
  bus: any
  ngOnInit() {
  }
  cerrarmod(){
    this.modalCtrl.dismiss({
      cancelar: 1
    });
  }
  selecbus = null
  fecha = ""
  hi = ""
  hf = ""
  enviarInfo(){
    if(this.fecha != '' || this.fecha != null){
      if(this.selecbus != '' || this.selecbus != undefined){

        let f = this.fecha
        let cf = f.substr(0,10)
        let cff = cf.replace('-', '')

        let hi2 = this.hi
        let chi = hi2.substr(11,8)

        let hf2 = this.hf
        let chf = hf2.substr(11,8)

        console.log(chi)

        this.modalCtrl.dismiss({
          cancelar: 0,
          bus: this.selecbus,
          dia: cff.replace('-', ''),
          hi: chi,
          hf: chf
        });
        
      }else{this.presentToast('el campo fecha esun campo obligatorio')}
    }else{this.presentToast('el campo fecha esun campo obligatorio')}
   
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }

}
