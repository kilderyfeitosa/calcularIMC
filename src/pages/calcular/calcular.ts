import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CalcularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcular',
  templateUrl: 'calcular.html',
})
export class CalcularPage {
  vi: any;
  va: any;
  vp: any;

  resultado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  calcular(){
    var res = this.vp / (this.va * this.va);
    
    if(res >= 16 && res <= 16.9){
      this.resultado = "Seu Indice de Massa Corporal é: Muito abaixo do peso.";
    }else if(res >= 17 && res <= 18.4){
      this.resultado = "Seu Indice de Massa Corporal é: Abaixo do peso.";
    }else if(res >= 18.5 && res <= 24.9){
      this.resultado = "Seu Indice de Massa Corporal é: Peso normal.";
    }else if(res >= 25 && res <= 29.9){
      this.resultado = "Seu Indice de Massa Corporal é: Acima do peso.";
    }else if(res >= 30 && res <= 34.9){
      this.resultado = "Seu Indice de Massa Corporal é: Obesidade Grau I.";
    }else if(res >= 35 && res <= 40){
      this.resultado = "Seu Indice de Massa Corporal é: Obesidade Grau II.";
    }else if(res > 40){
      this.resultado = "Seu Indice de Massa Corporal é: Obesidade Grau III.";
    }else{
      this.resultado = "Por favor, preencha todos os campos.";
    }
   
    const alert = this.alertCtrl.create({
      title: 'IMC',
      subTitle: this.resultado,
      buttons: ['OK']
    });
    alert.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalcularPage');
  }

}
