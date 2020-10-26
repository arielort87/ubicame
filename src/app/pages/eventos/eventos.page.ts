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
        var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }
  eventos: any[];
  traerEvent(){
    this.infAut.getEvents("20201013","ST300UEX").subscribe((data:any[])=>{
      this.eventos = data;
      console.log(data);
    },
    (error)=>{
      console.error(error);
    }
    )
  }

  data:any[] = Array(20)

  loadData(event){
    console.log('cargando siguiente')
    setTimeout(() => {
      const  nuevoArr = Array(20)
      this.data.push( ...nuevoArr );
      event.target.complete();
    }, 1000);
  }

  fecha: Date = new Date;


}
