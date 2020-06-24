import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AllarticlesComponent } from './allarticles/allarticles.component';
import { SortarticlesComponent } from './sortarticles/sortarticles.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { NgxPaginationModule } from "ngx-pagination";
import { FooterComponent } from './footer/footer.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.6,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "rectangle-bounce-pulse-out",
  "blur": 5,
  "delay": 0,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 500
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AllarticlesComponent,
    SortarticlesComponent,
    ArticledetailComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
