import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PopoverPage } from '../pages/popover/popover';
import { DescripcionPage } from '../pages/descripcion/descripcion';
import { LoginPage } from '../pages/login/login';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { RecuperarClavePage } from '../pages/recuperar-clave/recuperar-clave';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarsePage,
    RecuperarClavePage,
    PopoverPage,
    DescripcionPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarsePage,
    RecuperarClavePage,
    PopoverPage,
    DescripcionPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
