import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ServiceOneService } from './service-one.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildOneComponent ],
  providers: [ServiceOneService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
