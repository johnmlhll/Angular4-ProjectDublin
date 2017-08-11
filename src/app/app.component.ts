import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 - Dublin City'
  welcome = 'Welcome to ';
  tagline = '<working with Angular 4.3 in Dublin\'s fair city>';
}
