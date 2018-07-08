import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { setInterestsPage } from '../setInterests/setInterests';
import { User } from '../../models/user';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  private inputFirstName: string;
  private inputLastName: string;
  private inputEmail: string;
  private inputPassword: string;
  private inputLocation: string;

  constructor(public navCtrl: NavController) {}

  navigateToInterests() {
      console.log("navigating...");
      this.navCtrl.push(setInterestsPage);
  }
  
  createNewUser(firstName: string, lastName: string, email: string, location: string, password: string, isSubleaser: boolean) {
    var user = new User();
    user.firstname= firstName;
    user.lastname= lastName;
    user.email= email;
    user.password= password;
    user.location= location;
    user.isSubleaser= isSubleaser;
  }
  


  getUserData() {
    /** this.createNewUser(firstName, lastName, email, location, password, isSubleaser); */
  }

}