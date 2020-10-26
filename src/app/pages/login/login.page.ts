import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { InfouserService } from '../../services/infouser.service';
import { AutosService } from 'src/app/services/autos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public toastController: ToastController,
              private seruser: InfouserService,
              public loadingController: LoadingController,
              private validSe: AutosService) { this.presentLoading() }



async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Espere...',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  let token = localStorage.getItem('token');
  if(token != null){
      this.validSe.getPosCar().subscribe((data:any[])=>{
        this.router.navigate(['/inicio'])
      },
      (error)=>{
        console.error(error);
      }
    )
  }
}

  ngOnInit() { }
  get user(){
    return this.validationForm.get('user')
  }
  get pass(){
    return this.validationForm.get('passw')
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
  u:any[]
  e:any[]
  p:string
  logear(){
    
    if (this.validationForm.value.user != '' ){
      if (this.validationForm.value.passw != '' ){
        

        const datosuser = {
          "username":this.validationForm.value.user,
          "password": this.validationForm.value.passw
        }

        this.seruser.user(datosuser).subscribe((data:any[])=>{
          console.log(data)
          this.u = data["user"]
          localStorage.setItem("token",data['token'])
          localStorage.setItem("name",this.u["usu_nombre"])
          localStorage.setItem('ape',this.u["usu_apellidos"])
          localStorage.setItem('user',this.u["usu_login"])
          console.log(data)
          this.presentToast(`Bienvenido ${this.u["usu_nombre"]} ${this.u["usu_apellidos"]}`)
          this.router.navigate(['/inicio'])
        },
        (error)=>{
          this.e = error['error'];
          //this.p = JSON.stringify(error);
          this.presentToast(this.e['error'].message);
          //this.presentToast(this.p);
        }
        )

      }else{ this.presentToast('la contraseña es un campo requerido') }
    }else{ this.presentToast('el usuario es un campo requerido') }

    
  }

  async presentToast(men) {
    const toast = await this.toastController.create({
      message: men,
      duration: 1000
    });
    toast.present();
  }




}
