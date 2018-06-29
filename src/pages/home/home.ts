
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { RegistrationPage } from '../registration/registration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {}

  /** link this function to our Log In button to make it do something */
  navigateToLogin() {
 
    console.log("Navigating...") 

    this.navCtrl.push(LoginPage); 
  }

  navigateToRegistration() {

    console.log("Navigating...")

    this.navCtrl.push(RegistrationPage);
  }

  //make a function to create instance of user
  
  
}