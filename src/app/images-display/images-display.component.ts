import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-images-display',
  templateUrl: './images-display.component.html',
  styleUrls: ['./images-display.component.css'],
  animations: [
    trigger('viewSingleImage', [
      state('small', style({
        transform: 'scale(1)',
        })),
      state ('large', style({
          transform:'scale(2.2)',
          })),
      transition('small <=> large', animate('1500ms ease-in', keyframes([
        style({ opacity:0.2, transform:'translate(-40px, 0px)', offset:0 }),
        style({ opacity:0.6, transform:'translate(40px, 20px)', offset:0.5 }),
        style({ opacity:1.0, transform:'translate(-50px, 10px)', offset:1 }),
        ]))),
    ]),
  ]
})
export class ImagesDisplayComponent implements OnInit {
  //setting up variables for images - image list from assets folder
  imgOConnellBridge = 'assets/images/imgOConnellBridge.jpg';
  imgCityLink = 'assets/images/imgCityLink.jpg';
  imgBusyDublinSt = 'assets/images/imgBusyDublinSt.jpg';
  imgViewToIFSC = 'assets/images/imgViewToIFSC.jpg';

  //animation variable declaration
  state:string = 'small';

  constructor() { }

  ngOnInit() { }

  animateMe() {
    this.state = (this.state === 'small' ? 'large': 'small');
  }
}
