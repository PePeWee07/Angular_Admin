import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawers: { [key: string]: boolean } = {};

  constructor() {}

  open(id: string) {
    this.drawers[id] = true;
  }

    close(id: string) {
    this.drawers[id] = false;
  }

  isOpen(id: string) {
    return this.drawers[id];
  }
}