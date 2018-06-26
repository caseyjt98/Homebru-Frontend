import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  /** we want to link this function to our Log In button to make it do something */
  navigateToLogin() {
    /** use global object console to print "natigating" to your console, 
     * good for debugging */
    console.log("Navigating...") 

    this.navCtrl.push(LoginPage); 
  }

}
