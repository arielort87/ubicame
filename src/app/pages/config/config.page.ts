import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { InfouserService } from 'src/app/services/infouser.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public ctrlalert: AlertController, public toastController: ToastController, private serU: InfouserService) { }

  ngOnInit() {
  }
  name =  localStorage.getItem('name')
  ape = localStorage.getItem('ape')
  get passold(){
    return this.validationForm.get('passold')
  }
  get passnew(){
    return this.validationForm.get('passnew')
  }
  public errorMessages = {
    passold:[
      { type: 'required', message: 'Este campo es requerido.'},
      { type: 'maxlength', message: 'este nomre de usuairo es demasiado largo.'},
      { type: 'pattern', message: 'estos caracteres no son validos en un usuario.'}
    ],
    passnew:[
      { type: 'required', message: 'Este campo es requerido.'},
      { type: 'pattern', message: 'estos caracteres no son validos en una contraseña.'}
    ]
  }
  validationForm = this.formBuilder.group({
    passold: ['', [Validators. required]],
    passnew: ['', [Validators. required]]
  });
  e
  async cambiar() {
    const alert = await this.ctrlalert.create({
      cssClass: 'my-custom-class',
      header: '¿está seguro que desea cambiar su contraseña?',
      message: 'Para cambiar presione confirmar.',
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
          this.validationForm.reset()
        }
      }, {
        text: 'Confirmar',
        handler: () => {
          if (this.validationForm.value.passold != '' ){
            if (this.validationForm.value.passnew != '' ){
              let user = localStorage.getItem('user')
              const datosuser = {
                "old_password":this.validationForm.value.passold,
                "new_password": this.validationForm.value.passnew
              }
              this.serU.changePass(datosuser, user).subscribe((data:any[])=>{
                this.presentToast('Se cambio su contraseña correctamente')
                this.validationForm.reset()
              },
              (error)=>{
                this.e = error['error'];
                this.presentToast(this.e['error'].message);
                this.validationForm.reset()
              }
              )
            }else{ this.presentToast('El campo "nueva contraseña" es un campo requerido') }
          }else{ this.presentToast('El campo "Antigua contraseña" es un campo requerido') }
        }
      }
    ]
    });

    await alert.present();
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }

}
