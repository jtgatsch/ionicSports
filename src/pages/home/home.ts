import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public popoverCtrl: PopoverController) {

  	}

  	presentPopover(myEvent) {
	    let popover = this.popoverCtrl.create(PopoverPage);
	    popover.present({
	      ev: myEvent
		});
  	}
}
