import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InsertComponent } from './insert/insert.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { InsertpostComponent } from './insertpost/insertpost.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';
import {FileUploadModule} from 'ng2-file-upload';
import { SlicePipe } from './slice.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Options } from 'selenium-webdriver/chrome';

const ngxUiLoaderConfig: NgxUiLoaderConfig ={
  "bgsColor": "red",
  "bgsOpacity": 0.6,
  "bgsPosition": "bottom-right",
  "bgsSize": 50,
  "bgsType": "three-strings",
  "blur": 15,
  "delay": 0,
  "fgsColor": "#C82333",
  "fgsPosition": "center-center",
  "fgsSize": 70,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#00c4ff",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "Explore India",
  "textColor": "#FFFFFF",
  "textPosition": "bottom-center",
  "maxTime": -1,
  "minTime": 500
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    LoginComponent,
    SignupComponent,
    InsertComponent,
    HomeComponent,
    PostComponent,
    InsertpostComponent,
    SlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FileUploadModule,
    BrowserAnimationsModule,
    MaterialModule,
    SimpleNotificationsModule.forRoot({
      timeOut: 3000,
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
