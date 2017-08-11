import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ImagesDisplayComponent } from './images-display/images-display.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { FeatureArticleComponent } from './feature-article/feature-article.component';
import { AboutComponent } from './about/about.component';
import { CitytriviaComponent } from './citytrivia/citytrivia.component';
import { Ang4tipsComponent } from './ang4tips/ang4tips.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

//for app.component.ts nav bar routing
const NAV_DECLARATION = { AppComponent };

@NgModule({
  declarations: [
    AppComponent,
    ImagesDisplayComponent,
    VideoDisplayComponent,
    FeatureArticleComponent,
    AboutComponent,
    CitytriviaComponent,
    Ang4tipsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'citytrivia',
        component: CitytriviaComponent
      },
      {
        path:'ang4tips',
        component: Ang4tipsComponent
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'',
        component: HomeComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
