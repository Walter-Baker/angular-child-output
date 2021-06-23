import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-output',
  templateUrl: './child-output.component.html'
})
export class ChildOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
