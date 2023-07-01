import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  title!: string;
  description!: string;

  close() {
    this.modalCtrl.dismiss();
  }

  saveItem() {
    if (!this.title) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        title: this.title,
        description: this.description,
      },
      'accept'
    );
  }
}
