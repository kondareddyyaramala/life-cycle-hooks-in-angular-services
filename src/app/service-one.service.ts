import { Injectable } from '@angular/core';

@Injectable()
export class ServiceOneService {

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