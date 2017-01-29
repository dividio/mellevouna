import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Inicio } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { RestasPage } from '../pages/restas/restas';
import { MultiplicacionesPage } from '../pages/multiplicaciones/multiplicaciones';
import { CalculadoraPage } from '../pages/calculadora/calculadora';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Inicio;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: Inicio },
      { title: 'Restas', component: RestasPage },
      { title: 'Multiplicaciones', component: MultiplicacionesPage },
      { title: 'Calculadora', component: CalculadoraPage },
      { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
