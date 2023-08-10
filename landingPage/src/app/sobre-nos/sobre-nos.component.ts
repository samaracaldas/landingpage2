import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})


export class SobreNosComponent {
  showText: boolean = false;

  ngOnInit() {
    // Simula um atraso para mostrar a animação ao carregar a página
    setTimeout(() => {
      this.showText = true;
    }, 500);
  }

}
