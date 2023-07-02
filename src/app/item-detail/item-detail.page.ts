import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  title!: string;
  description!: string;

  ionViewDidEnter() {
    this.title = this.route.snapshot.params['title'];
    this.description = 'description';
  }
}
