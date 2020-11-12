import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-modhistorial',
  templateUrl: './modhistorial.page.html',
  styleUrls: ['./modhistorial.page.scss'],
})
export class ModhistorialPage implements OnInit {

  @Input() selecbus;
  @Input() fecha;
  @Input() hi;
  @Input() hf;


  constructor(private modalCtrl: ModalController, private buses: AutosService, public toastController: ToastController) { 
    this.buses.getPosCar().subscribe(data => {
      this.bus = data;
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
   
  placa
  enviarInfo(){
    if(this.fecha != '' && this.fecha != null){
      if(this.selecbus != null && this.selecbus != ''){
        if(this.hi != '' && this.hi != null){
          if(this.hf != '' && this.hf != null){
            for (let i = 0; i < this.bus.length; i++) {
              if(this.selecbus == this.bus[i].trama['idgps']){
                this.placa = this.bus[i].vehiculo['veh_placa']
              }
              
            }

            let f = this.fecha
            let cf = f.substr(0,10)
            let cff = cf.replace('-', '')
    
            let hi2 = this.hi
            let chi = hi2.substr(11,8)
    
            let hf2 = this.hf
            let chf = hf2.substr(11,8)
    
            this.modalCtrl.dismiss({
              cancelar: 0,
              placa: this.placa,
              bus: this.selecbus,
              dia: cff.replace('-', ''),
              hi: chi,
              hf: chf,
              busc: this.selecbus,
              diac: this.fecha,
              hic: this.hi,
              hfc: this.hf,
            });

          }else{this.presentToast('el campo hora final es un campo obligatorio')}
        }else{this.presentToast('el campo hora inicial es un campo obligatorio')}        
      }else{this.presentToast('el campo bus es un campo obligatorio')}
    }else{this.presentToast('el campo fecha es un campo obligatorio')}
   
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }

}
