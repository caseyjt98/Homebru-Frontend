import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterestsPage } from '../interests/interests';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {}


  navigateToInterests() {

    console.log("Navigating...") 

    this.navCtrl.push(InterestsPage);

  }
}
