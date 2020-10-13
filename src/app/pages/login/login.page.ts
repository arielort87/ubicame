import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { InfouserService } from '../../services/infouser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public toastController: ToastController,
              private seruser: InfouserService) { }

  
  

  ngOnInit() {
  }
  get user(){
    return this.validationForm.get('user')
  }
  get pass(){
    return this.validationForm.get('pasjuor')
  }

  public errorMessages = {
    user:[
      { type: 'required', message: 'Este campo es requerido.'},
      { type: 'maxlength', message: 'este nomre de usuairo es demasiado largo.'},
      { type: 'pattern', message: 'estos caracteres no son validos en un usuario.'}
    ],
    pass:[
      { type: 'required', message: 'Este campo es requerido.'},
      { type: 'pattern', message: 'estos caracteres no son validos en una contraseña.'}
    ]
  }

  validationForm = this.formBuilder.group({
    user: ['', [Validators. required, Validators.maxLength(10)]],
    passw: ['', [Validators. required, Validators.pattern("")]]
  });

  logear(){
    
    if (this.validationForm.value.user != '' ){
      if (this.validationForm.value.passw != '' ){
        this.router.navigate(['/inicio'])
        console.log(this.validationForm.value);
        let a = this.seruser.user
        this.presentToast(a)

      }else{ this.presentToast('la contraseña es un campo requerido') }
    }else{ this.presentToast('el usuario es un campo requerido') }

    
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 2000
    });
    toast.present();
  }


}
