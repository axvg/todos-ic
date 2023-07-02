import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Item } from './home/home.page';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data: Item[]) {
    this.storage.set('todos', data);
  }

  async getItem(title: string) {
    const data: Item[] = await this.getData();
    let item = data.filter((item) => item.title === title);

    if (item.length > 0) {
      return item[0];
    } else {
      return { title: '', description: '' } as Item;
    }
  }
}
