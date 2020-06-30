import { Injectable, Inject, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Injectable()
export class ServiceOneService implements OnDestroy, OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('Service ngOnInit');
  }

  ngOnDestroy() {
    console.log('Service ngOnDestroy');
  }
}