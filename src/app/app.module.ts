import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AlertController, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserService} from "../services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {EventListPage} from "../pages/event-list/event-list";
import {AddEventPage} from "../pages/add-event/add-event";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EventListPage,
    AddEventPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EventListPage,
    AddEventPage
  ],
  providers: [
    StatusBar,
    AlertController,
    UserService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
