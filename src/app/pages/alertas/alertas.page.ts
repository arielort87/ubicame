import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  constructor( private infAut:AutosService ) { }

  ngOnInit() {
  }
  alertas:any[];
  getAlert(){
    this.infAut.getAlert("ST300EMG",1).subscribe((data:any)=>
    {
      this.alertas = data;
    },
    (error)=>{ console.error(error)}
    )
  }

}
