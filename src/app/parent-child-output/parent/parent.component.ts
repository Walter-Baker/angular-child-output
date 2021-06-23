import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html'
})

export class ParentComponent {

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}