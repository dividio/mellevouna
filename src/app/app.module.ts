import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { SumasPage } from '../pages/sumas/sumas';
import { RestasPage } from '../pages/restas/restas';
import { MultiplicacionesPage } from '../pages/multiplicaciones/multiplicaciones';
import { CalculadoraPage } from '../pages/calculadora/calculadora';
import { EjerciciosViewModelService } from '../pages/calculadora/ejercicios-view-model.service';

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    SumasPage,
    RestasPage,
    MultiplicacionesPage,
    CalculadoraPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    SumasPage,
    RestasPage,
    MultiplicacionesPage,
    CalculadoraPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EjerciciosViewModelService]
})
export class AppModule {}
