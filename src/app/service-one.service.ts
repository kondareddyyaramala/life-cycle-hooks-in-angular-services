import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Injectable()
export class ServiceOneService implements OnDestroy{

  constructor() {
    console.log('Service constructor');
  }

  ngOnInit() {
    console.log('Service ngOnInit');
  }

  ngOnDestroy() {
    console.log('Service ngOnDestroy');
  }

}