import { Component, OnInit, Optional } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor(@Optional() private service: ServiceOneService) { 
    console.log('ChildTwoComponent ::: ', service);
  }

  ngOnInit() {
  }

}