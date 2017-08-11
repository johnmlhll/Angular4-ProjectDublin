import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-citytrivia',
  templateUrl: './citytrivia.component.html',
  styleUrls: ['./citytrivia.component.css'],
  animations: [
    trigger('viewDubImages', [
      state('small', style({
        transform: 'scale(1)',
        })),
      state ('large', style({
          transform:'scale(1.6)',
          })),
      transition('small <=> large', animate('1300ms ease-in-out', keyframes([
        style({ opacity:0.2, transform:'translate(-5px, 10px)', backgroundColor: 'rgba(239,193,44,0.7)',  offset:0 }),
        style({ opacity:0.6, transform:'translate(-10px, -90px)', backgroundColor: 'rgba(239,193,44,0.6)', offset:0.5 }),
        style({ opacity:1.0, transform:'translate(-20px, -10px)', backgroundColor: 'rgba(239,193,44,0.5)', offset:1 }),
        ]))),
    ]),
  ]
})
export class CitytriviaComponent implements OnInit {
  //setting up variables for images - image list from assets folder
  imgOConnellBridge = 'assets/images/imgOConnellBridge.jpg';
  imgCityLink = 'assets/images/imgCityLink.jpg';
  imgBusyDublinSt = 'assets/images/imgBusyDublinSt.jpg';
  imgViewToIFSC = 'assets/images/imgViewToIFSC.jpg';
  state:string = 'small';

  constructor() { }

  ngOnInit() {}

  //method to animate the bottom city pick row
  animateMe() {
    this.state = (this.state === 'small' ? 'large':'small');
  }
}
