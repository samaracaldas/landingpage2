import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('linkAnimation', [
      state('initial', style({
        transform: 'translateY(0)'
      })),
      state('final', style({
        transform: 'translateY(-5px)'
      })),
      transition('initial <=> final', animate('200ms ease-in-out')),
    ])
  ]
})

export class NavComponent {
  linkState = 'initial';

  onMouseEnter() {
    this.linkState = 'final';
  }

  onMouseLeave() {
    this.linkState = 'initial';
  }
}
