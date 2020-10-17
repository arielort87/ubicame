import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { InfouserService } from '../../services/infouser.service';
import { AutosService } from 'src/app/services/autos.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>

  constructor( private menuCtrl: MenuController, private dataservice: InfouserService, private router: Router, private validSe: AutosService ) { }
  uname
  uape
  ngOnInit() {
    this.componentes = this.dataservice.getMenu();
    this.uname = localStorage.getItem('name')
    this.uape = localStorage.getItem('ape')
  }

  cerrars(){
    localStorage.clear();
    this.menuCtrl.toggle();
    let token = localStorage.getItem('token');
    if(token != null){
        this.router.navigate(['/inicio'])
  }
  }

}
