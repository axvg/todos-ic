import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  title!: string;
  description!: string;

  async ionViewDidEnter() {
    this.title = this.route.snapshot.params['title'];
    this.description = (await this.dataService.getItem(this.title)).description;
  }
}
