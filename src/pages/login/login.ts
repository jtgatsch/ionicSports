import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { RecuperarClavePage } from '../recuperar-clave/recuperar-clave';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
  }

  stBar() {

  // let status bar overlay webview
  this.statusBar.overlaysWebView(false);

  // set status bar to white
  this.statusBar.backgroundColorByHexString('#ffffff');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onClick() {
  	this.navCtrl.push(RegistrarsePage)
  }

  linkRecClave() {
    this.navCtrl.push(RecuperarClavePage)
  }

}
