import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-hherader',
  templateUrl: './hherader.component.html',
  styleUrls: ['./hherader.component.scss'],
})
export class HheraderComponent implements OnInit {
  @Input() name: string;
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}
  
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
