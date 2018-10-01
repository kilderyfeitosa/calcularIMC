import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CalcularPage} from '../calcular/calcular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCalcularPage(){
    this.navCtrl.push(CalcularPage);
  }

}
