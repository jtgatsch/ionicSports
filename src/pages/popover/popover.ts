import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';
import { DescripcionPage } from '../descripcion/descripcion';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="onClick()" class="font-normal">Editar Vídeo</button>
      <button ion-item class="font-normal">Quitar Vídeos</button>
      <button ion-item class="font-normal">Quitar Vídeos</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  onClick() {
    this.navCtrl.push(DescripcionPage)
  }

}
