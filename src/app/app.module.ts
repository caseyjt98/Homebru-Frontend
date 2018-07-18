import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { DetailsPage } from '../pages/details/details';
import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
import { Registration2Page } from '../pages/registration2/registration2';
import { Registration3Page } from '../pages/registration3/registration3';
import { AddProductPage } from '../pages/add-product/add-product';
import { MapPage } from '../pages/map/map';
import { SignInPage } from '../pages/sign-in/sign-in';
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    DetailsPage,
    PaymentHistoryPage,
    Registration2Page,
    Registration3Page,
    AddProductPage,
    MapPage,
    SignInPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    DetailsPage,
    PaymentHistoryPage,
    Registration2Page,
    Registration3Page,
    AddProductPage,
    MapPage,
    SignInPage
  
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
