import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { InfouserService } from '../../services/infouser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>

  constructor( private dataservice: InfouserService ) { }

  ngOnInit() {
    this.componentes = this.dataservice.getMenu();
  }

}
