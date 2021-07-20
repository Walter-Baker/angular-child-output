import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-output',
  templateUrl: './child-output.component.html'
})
export class ChildOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  counter = 0;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  IncrementCounter(){
    ++this.counter;
  }

  Print(value: any){
    console.log(value);
  }
}
