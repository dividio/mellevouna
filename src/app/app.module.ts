import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { RestasPage } from '../pages/restas/restas';
import { MultiplicacionesPage } from '../pages/multiplicaciones/multiplicaciones';
import { CalculadoraPage } from '../pages/calculadora/calculadora';

@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Page2,
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
    Page2,
    RestasPage,
    MultiplicacionesPage,
    CalculadoraPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
