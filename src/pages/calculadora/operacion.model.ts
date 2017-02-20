export class Operacion {

  private titulo: string;
  private tipo: string;
  private ayuda: string;
  private instrucciones: Array<any> = [];
  private resultado: string;
  private numeroOperaciones: number;
  private dificultad: number;

  constructor() {}

  public get Titulo(): string {
    return this.titulo;
  }

  public set Titulo(titulo: string) {
    this.titulo = titulo;
  }

  public get Tipo(): string {
    return this.tipo;
  }

  public set Tipo(tipo: string) {
    this.tipo = tipo;
  }

  public get Ayuda(): string {
    return this.ayuda;
  }

  public set Ayuda(ayuda: string) {
    this.ayuda = ayuda;
  }

  public get Instrucciones(): Array<any> {
    return this.instrucciones;
  }

  public set Instrucciones(instrucciones: Array<any>) {
    this.instrucciones = instrucciones;
  }

  public get Resultado(): string {
    return this.resultado;
  }

  public set Resultado(resultado: string) {
    this.resultado = resultado;
  }

  public get NumeroOperaciones(): string {
    return this.numeroOperaciones;
  }

  public set NumeroOperaciones(numeroOperaciones: string) {
    this.numeroOperaciones = numeroOperaciones;
  }

  public get Dificultad(): string {
    return this.dificultad;
  }

  public set Dificultad(dificultad: string) {
    this.dificultad = dificultad;
  }
}
