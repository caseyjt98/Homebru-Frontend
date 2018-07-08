

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { setInterestsPage } from '../setInterests/setInterests';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})

export class RegistrationPage {

  private firstname: string;
  private lastname: string;
  private email: string;
  private password: string;
  private location: string;
  private isSubleaser: boolean;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {}

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
    // this.createNewUser(firstName, lastName, email, location, password, isSubleaser); 
  }

  doConfirm() {
    let confirm = this.alerCtrl.create ( {
      title: 'Allow location access?',
      message: 'Allow access to your current location while using the app?',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present()
  }
}

