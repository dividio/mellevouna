import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EjerciciosViewModelService } from '../calculadora/ejercicios-view-model.service';
import { CalculadoraPage } from '../calculadora/calculadora';

/*
  Generated class for the Multiplicaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-multiplicaciones',
  templateUrl: 'multiplicaciones.html'
})
export class MultiplicacionesPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public ejerciciosViewModelService: EjerciciosViewModelService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiplicacionesPage');
  }

  public ejercicio(
      numeroOperaciones: number,
      dificultad: number): void {
    this.ejerciciosViewModelService.nuevoEjercicio(
        'multiplicacion', numeroOperaciones, dificultad);
    this.navCtrl.push(CalculadoraPage);
  }
}
