import { Injectable } from '@angular/core';
import { Operacion } from './operacion.model';
import { Ejercicio } from './ejercicio.model';

@Injectable()
export class EjerciciosViewModelService {

  private ejercicio: Ejercicio;

  constructor () {}

  public get Ejercicio(): Ejercicio {
    return this.ejercicio;
  }

  public nuevoEjercicio(
      tipo: string,
      numeroOperaciones: number,
      dificultad: number): void {

    this.ejercicio = new Ejercicio();
    this.ejercicio.Aciertos = 0;
    this.ejercicio.Fallos = 0;
    this.nuevaOperacion(tipo, numeroOperaciones, dificultad);
  }

  public nuevaOperacion(
      tipo: string,
      numeroOperaciones: number,
      dificultad: number): void {

    let operacion: Operacion;

    if (tipo === 'suma') {
      operacion = this.generarSuma(numeroOperaciones, dificultad);
    } else if (tipo === 'resta') {
      operacion = this.generarResta(numeroOperaciones, dificultad);
    } else if (tipo === 'multiplicacion') {
      operacion = this.generarMultiplicacion(numeroOperaciones, dificultad);
    }

    this.ejercicio.Operaciones.push(operacion);
  }

  private generarSuma(
      numeroOperaciones: number,
      dificultad: number): Operacion {

    let operacion: Operacion = new Operacion();
    let resultado: number = 0;

    operacion.Titulo = 'Suma';
    operacion.Tipo = 'suma';
    operacion.Ayuda = 'Suma mentalmente y escribe la solución';
    operacion.NumeroOperaciones = numeroOperaciones;
    operacion.Dificultad = dificultad;
    for (let i: number = 0; i < 2 * numeroOperaciones + 1; i++) {
      let elemento : string;
      if (i % 2 === 0) {
        elemento = '+';
      } else {
        let numero: number = Math.floor(Math.random()*Math.pow(10, dificultad));
        resultado = resultado + numero;
        elemento = (numero || 0).toLocaleString();
      }
      operacion.Instrucciones.push(elemento);
    }

    operacion.Resultado = (resultado  || 0).toLocaleString();

    return operacion;
  }

  private generarResta(
      numeroOperaciones: number,
      dificultad: number): Operacion {
    let operacion: Operacion = new Operacion();
    let resultado: number = 0;

    operacion.Titulo = 'Resta';
    operacion.Tipo = 'resta';
    operacion.Ayuda = 'Resta mentalmente y escribe la solución';
    operacion.NumeroOperaciones = numeroOperaciones;
    operacion.Dificultad = dificultad;
    for (let i: number = 0; i < 2 * numeroOperaciones + 1; i++) {
      let elemento: string;
      if (i % 2 !== 0) {
        elemento = '-';
      } else {
        let numero: number = Math.floor(Math.random()*Math.pow(10, dificultad));
        if (i == 0) {
          resultado = numero;
        } else {
          resultado = resultado - numero;
        }
        elemento = (numero || 0).toLocaleString();
      }
      operacion.Instrucciones.push(elemento);
    }

    operacion.Resultado = (resultado  || 0).toLocaleString();

    return operacion;
  }

  private generarMultiplicacion(
      numeroOperaciones: number,
      dificultad: number): Operacion {
    let operacion: Operacion = new Operacion();
    let resultado: number = 0;

    operacion.Titulo = 'Multiplicación';
    operacion.Tipo = 'multiplicacion';
    operacion.Ayuda = 'Multiplica mentalmente y escribe la solución';
    operacion.NumeroOperaciones = numeroOperaciones;
    operacion.Dificultad = dificultad;
    for (let i: number = 0; i < 2 * numeroOperaciones + 1; i++) {
      let elemento: string;
      if (i % 2 !== 0) {
        elemento = 'x';
      } else {
        let numero: number = Math.floor(Math.random()*Math.pow(10, dificultad));
        if (i == 0) {
          resultado = numero;
        } else {
          resultado = resultado * numero;
        }
        elemento = (numero || 0).toLocaleString();
      }
      operacion.Instrucciones.push(elemento);
    }

    operacion.Resultado = (resultado  || 0).toLocaleString();

    return operacion;
  }
}
