import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes  } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('viewImages', [
      state('small', style({
        transform: 'scale(1)',
        })),
      state ('large', style({
          transform:'scale(1.5)',
          })),
      transition('small <=> large', animate('2000ms ease-in', keyframes([
        style({ opacity:0.2, transform:'translate(-20px, 10px)', backgroundColor: 'rgba(239,193,44,0.7)',  offset:0 }),
        style({ opacity:0.6, transform:'translate(120px, 20px)', backgroundColor: 'rgba(239,193,44,0.6)', offset:0.5 }),
        style({ opacity:1.0, transform:'translate(-20px, 0px)', backgroundColor: 'rgba(239,193,44,0.5)', offset:1 }),
        ]))),
    ]),
  ]
})
export class AboutComponent implements OnInit {

  //declare variables
  imgSpringBoardAccept = "assets/images/imgSpringbaordAcceptance.jpg";
  imgJohnInsideDBS = "assets/images/imgJohnInsideDBS.jpg";
  state:string = 'small';

  constructor() { }

  ngOnInit() {}

  //function for animating images to a larger size
  animateMe() {
    this.state = (this.state === 'small' ? 'large':'small');
  }
}
