import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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

  /* Ejercicio en curso */
  private ejercicio : Ejercicio;

  /* Resultado introducido por el usuario */
  private resultado : string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public alertCtrl: AlertController,
      public ejerciciosViewModelService: EjerciciosViewModelService) {
    this.cargarOperacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculadoraPage');
  }

  /* Añade un nuevo operando al resultado */
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
      let sign: string = this.resultado.substring(0, 1);
      if (sign === '-') {
        this.resultado = this.resultado.substring(1, this.resultado.length);
      } else {
        this.resultado = '-' + this.resultado;
      }
    }
  }

  public ayuda(): void {
    let alert = this.alertCtrl.create({
      title: 'Ayuda',
      subTitle: this.operacion.Ayuda,
      buttons: ['OK']
    });
    alert.present();
  }

  public mostrarResultado(): void {
    let confirm = this.alertCtrl.create({
      title: 'Solución',
      subTitle: 'La respuesta correcta es ' + this.operacion.Resultado,
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.nuevo();
          }
        },
        {
          text: 'Salir',
          handler: () => {
            this.salir();
          }
        }
      ]
    });
    confirm.present();
  }

  public comprobar(): void {
    let titulo: string;
    let message: string;
    let buttons: Array<any> = [];
    if (this.resultado === this.operacion.Resultado) {
      this.ejercicio.Aciertos = this.ejercicio.Aciertos + 1;
      titulo = 'Acertaste!!';
      message = '¿Quieres realizar otra operación?';
      buttons = [
        {
          text: 'Sí',
          handler: () => {
            this.nuevo();
          }
        },
        {
          text: 'No',
          handler: () => {
            this.salir();
          }
        }];
    } else {
      this.ejercicio.Fallos = this.ejercicio.Fallos + 1;
      titulo = 'Respuesta incorrecta';
      message = '¿Qué deseas hacer?';
      buttons = [
        {
          text: 'Repetir',
          handler: () => {
            console.log('Repetir');
            this.resultado = '';
          }
        },
        {
          text: 'Ver resultado',
          handler: () => {
            console.log('Ver resultado');
            this.mostrarResultado();
          }
        },
        {
          text: 'Salir',
          handler: () => {
            this.salir();
          }
        }];
    }

    let confirm = this.alertCtrl.create({
      title: titulo,
      message: message,
      buttons: buttons
    });
    confirm.present();
  }

  public nuevo(): void {
    console.log('Nuevo');
    this.ejercicio.Operaciones.push(this.operacion);
    this.ejerciciosViewModelService.nuevaOperacion(
      this.operacion.Tipo,
      this.operacion.NumeroOperaciones,
      this.operacion.Dificultad
    );
    this.cargarOperacion();
  }

  public cargarOperacion(): void {
    this.ejercicio = this.ejerciciosViewModelService.Ejercicio;
    this.operacion = this.ejercicio.Operaciones.pop();
    this.resultado = '';
  }

  public salir(): void {
    console.log('Salir');
    this.navCtrl.pop();
  }
}
