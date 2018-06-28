import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { setInterestsPage } from '../setInterests/setInterests';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {}

  navigateToInterests() {
      console.log("navigating...");
      this.navCtrl.push(setInterestsPage);
  }
  
}