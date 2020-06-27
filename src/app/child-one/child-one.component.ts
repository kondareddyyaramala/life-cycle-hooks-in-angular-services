import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  providers: [ServiceOneService]
})
export class ChildOneComponent implements OnInit {

  constructor(private ser: ServiceOneService) {
    console.log('ChildOneComponent constructor');
  }

  ngOnInit() {
    console.log('ChildOneComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('ChildOneComponent ngOnDestroy');
  }
}