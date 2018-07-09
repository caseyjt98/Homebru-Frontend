

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { setInterestsPage } from '../setInterests/setInterests';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

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

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public http: Http) {}

  navigateToInterests() {
      console.log("navigating...");
      this.navCtrl.push(setInterestsPage);
  }
  /**
  createNewUser() {
    var user = new User();
    user.firstname= this.firstname;
    user.lastname= this.lastname;
    user.email= email;
    user.password= password;
    user.location= location;
    user.isSubleaser= isSubleaser;
  }
  */

  //do a post to http instead of createNewUSer as above! 
  register() {
      var user= new User();
      user.firstname = this.firstname,
      user.lastname= this.lastname,
      user.email= this.email,
      user.password= this.password,
      user.location= this.location,
      user.isSubleaser= this.isSubleaser

      this.http.post("http:localhost:3000/registration ", user);

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

