import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { DataService } from '../data.service';

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
    public modalCtrl: ModalController,
    public dataService: DataService
  ) {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = todos;
      }
    });
  }
  public items: Item[] = [];
  $component = AddItemPage;

  viewItem(item: Item) {
    const formattedTitle = item.title.replace(/\s+/g, '-');
    this.navCtrl.navigateForward(['item-detail', formattedTitle], {
      animated: true,
    });
  }

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
    this.items?.push(item);
    this.dataService.save(this.items);
  }
}
