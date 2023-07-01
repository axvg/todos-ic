import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';

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
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}
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

  async addItem() {
    const modal = await this.modalCtrl.create({ component: AddItemPage });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'accept') {
      if (data as Item) {
        this.saveItem(data);
      }
    }
  }

  saveItem(item: Item) {
    this.items.push(item);
  }
}
