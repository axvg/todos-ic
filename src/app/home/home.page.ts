import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Item {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  public items!: Item[];

  ionViewDidEnter() {
    this.items = [
      {
        title: 'Item 1',
        description: 'This is an item description.',
      },
      {
        title: 'Item 2',
        description: 'This is an item description.',
      },
      {
        title: 'Item 3',
        description: 'This is an item description.',
      },
    ];
  }

  viewItem(item: any) {}
  addItem() {}
}
