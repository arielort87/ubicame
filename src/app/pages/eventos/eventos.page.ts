import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(private infAut:AutosService) { 
    this.traerEvent();
  }

  ngOnInit() {
  }
  eventos: any[];
  traerEvent(){
    this.infAut.getEvents("20200930","ST300UEX").subscribe((data:any[])=>{
      this.eventos = data;
      console.log(data);
    },
    (error)=>{
      console.error(error);
    }
    )
  }


}
