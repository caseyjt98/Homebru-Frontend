import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { setInterestsPage } from '../setInterests/setInterests';
import { User } from '../../models/user';

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
  
  createNewUser(firstName: string, lastName: string, email: string, location: string, password: string, isSubleaser: boolean) {
    //var user= createUser(firstName, lastName, email, password, location, isSubleaser);

  
  }
  
}