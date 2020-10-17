import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AutosService } from './services/autos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private validSe: AutosService,
    private router: Router
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.alerta()
    });
  }
  alerta(){
    let token = localStorage.getItem('token');
    if(token != null){
        this.validSe.getPosCar().subscribe((data:any[])=>{
          this.router.navigate(['/inicio'])
        },
        (error)=>{
          console.error(error);
          this.router.navigate(['/'])
        }
      )
    }else{
      this.router.navigate(['/'])
    }
  }
}
