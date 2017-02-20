import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EjerciciosViewModelService } from './ejercicios-view-model.service';
import { Operacion } from './operacion.model';
import { Ejercicio } from './ejercicio.model';

/*
  Generated class for the Calculadora page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calculadora',
  templateUrl: 'calculadora.html'
})
export class CalculadoraPage {

  /* Operacion a realizar */
  private operacion : Operacion;

  /* Solucion de la operacion a realizar */
  private ejercicio : Ejercicio;

  /* Resultado introducido por el usuario */
  private resultado : string;

  @Input() ValorInicial : string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public ejerciciosViewModelService: EjerciciosViewModelService) {
    this.ejercicio = this.ejerciciosViewModelService.Ejercicio;
    this.operacion = this.ejercicio.Operaciones.pop();
    this.resultado = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  public addOperando(operando: string): void {
    if (operando === ',') {
      if (this.resultado.indexOf(operando) === -1) {
        this.resultado = this.resultado + operando;
      }
    } else {
      this.resultado = this.resultado + operando;
    }
  }

  public borrarUltimo(): void {
    if (this.resultado.length === 1) {
      this.borrarTodo();
    } else if (this.resultado.length > 1) {
      this.resultado = this.resultado.substring(0, this.resultado.length - 1);
    }
  }

  public borrarTodo(): void {
    this.resultado = '';
  }

  public cambiarSigno(): void {
    if (this.resultado.length > 0) {
      let sign = this.resultado.substring(0, 0);
      if (sign === '-') {
        this.resultado = this.resultado.substring(1, this.resultado.length);
      } else {
        this.resultado = '-' + this.resultado;
      }
    }
  }

  public ayuda(): void {
    alert(this.operacion.Ayuda);
  }

  public comprobar(): void {
    if (this.resultado === this.operacion.Resultado) {
      alert('Acertaste!!');
    } else {
      alert('Respuesta incorrecta!! La respuesta correcta es ' + this.operacion.Resultado);
    }
  }
}
