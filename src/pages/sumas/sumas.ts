import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { EjerciciosViewModelService } from '../calculadora/ejercicios-view-model.service';
import { CalculadoraPage } from '../calculadora/calculadora';

@Component({
  selector: 'page-sumas',
  templateUrl: 'sumas.html'
})
export class SumasPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public ejerciciosViewModelService: EjerciciosViewModelService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SumasPage');
  }

  public ejercicio(
      numeroOperaciones: number,
      dificultad: number): void {
    this.ejerciciosViewModelService.nuevoEjercicio(
        'suma', numeroOperaciones, dificultad);
    this.navCtrl.push(CalculadoraPage);
  }
}
