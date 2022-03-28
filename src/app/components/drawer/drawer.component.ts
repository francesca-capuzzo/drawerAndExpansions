import { Component, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: 0,
            })),
      state('close', style({
        right: '-30vw',
    
      })),
      transition('open => close', [
        animate('1s'),
     
      ]),
      transition('close => open', [
     
        animate('1s')
      ]),
    ]),
  ]
})


export class DrawerComponent implements OnInit {

  @Input() drawerState = 'close'

  constructor() { }

  ngOnInit(): void {
  }


}
