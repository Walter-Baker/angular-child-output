import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChildOutputComponent } from './parent-child-output/child/child-output.component';
import { ParentComponent } from './parent-child-output/parent/parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ChildOutputComponent,
    ParentComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
