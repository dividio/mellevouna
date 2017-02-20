import { Operacion } from './operacion.model';

export class Ejercicio {

  private operaciones: Array<Operacion> = [];
  private aciertos: number;
  private fallos: number;

  constructor() {}

  public get Operaciones(): Array<Operacion> {
    return this.operaciones;
  }

  public set Operaciones(operaciones: Array<Operacion>) {
    this.operaciones = operaciones;
  }

  public get Aciertos(): number {
    return this.aciertos;
  }

  public set Aciertos(aciertos: number) {
    this.aciertos = aciertos;
  }

  public get Fallos(): number {
    return this.fallos;
  }

  public set Fallos(fallos: number) {
    this.fallos = fallos;
  }
}
