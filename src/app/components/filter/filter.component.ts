import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '300px'
            })),
      state('close', style({
        height: '80px'
      })),
      transition('open => close', [
        animate('0.5s'),
     
      ]),
      transition('close => open', [
     
        animate('0.5s')
      ]),
    ]),
  ]
})
export class FilterComponent implements OnInit {

  @Input() changeStateFilter = 'close'

  isClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  openClose(){
    if (this.changeStateFilter === 'close') {
      this.changeStateFilter = 'open';
      this.isClicked = true;
    } else {
      this.changeStateFilter = 'close';
      this.isClicked = false;
    }
  }
}
