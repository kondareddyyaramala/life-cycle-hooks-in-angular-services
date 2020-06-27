import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ServiceOneService } from './service-one.service';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildOneComponent, ChildTwoComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
