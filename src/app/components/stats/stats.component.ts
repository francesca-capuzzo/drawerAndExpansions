import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
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

export class StatsComponent implements OnInit {

  @Input() changeStateStats = 'close';

  isClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  openClose(){
    if (this.changeStateStats === 'close') {
      this.changeStateStats = 'open';
      this.isClicked = true;
    } else {
      this.changeStateStats = 'close';
      this.isClicked = false;
    }
  }
}
