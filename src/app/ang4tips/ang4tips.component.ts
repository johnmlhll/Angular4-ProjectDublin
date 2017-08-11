import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-ang4tips',
  templateUrl: './ang4tips.component.html',
  styleUrls: ['./ang4tips.component.css'],
  animations: [
    trigger('viewAngularTip', [
      state('small', style({
        transform: 'scale(1)',
        })),
      state ('large', style({
          transform:'scale(1.1)',
          })),
      transition('small <=> large', animate('1700ms ease-in-out', keyframes([
        style({ opacity:0.2, transform:'translate(-40px, 10px)', backgroundColor: 'rgba(239,193,44,0.7)',  offset:0 }),
        style({ opacity:0.6, transform:'translate(90px, 20px)', backgroundColor: 'rgba(239,193,44,0.6)', offset:0.5 }),
        style({ opacity:1.0, transform:'translate(-50px, 0px)', backgroundColor: 'rgba(239,193,44,0.5)', offset:1 }),
        ]))),
    ]),
  ]
})
export class Ang4tipsComponent implements OnInit {
  //variable declarations
  imgWebAnimationsPolyfill = 'assets/images/imgWebAnimationsPolyfill.png';
  imgJohnMulWorkStation = 'assets/images/imgJohnWorking.jpg';
  state:string = 'small';

  constructor() { }

  ngOnInit() { }

  animateMe() {
    this.state = (this.state === 'small' ? 'large': 'small');
  }

}
