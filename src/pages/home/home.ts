

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import 'rxjs/add/operator/map';
import { SignInPage } from '../sign-in/sign-in';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) { }


 navigateToSignIn() {
 
  console.log("Navigating...") 

  this.navCtrl.push(SignInPage); 

 }

  navigateToRegistration() {

    console.log("Navigating...")

    this.navCtrl.push(RegistrationPage);
  }
  
  
}
