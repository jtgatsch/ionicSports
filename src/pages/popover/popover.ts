import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

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
      <button ion-item (click)="close()" class="font-normal">Learn Ionic</button>
      <button ion-item (click)="close()" class="font-normal">Documentation</button>
      <button ion-item (click)="close()" class="font-normal">Showcase</button>
      <button ion-item (click)="close()" class="font-normal">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
