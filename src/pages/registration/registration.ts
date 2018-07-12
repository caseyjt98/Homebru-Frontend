

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Registration2Page } from '../registration2/registration2';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})

export class RegistrationPage {

  private isSubleaser: boolean;

  constructor(public navCtrl: NavController) {}

  
  userIsSubleaser() {
    this.isSubleaser = true;
    console.log('Users new state:' + this.isSubleaser);
    this.navigateToRegistration2Page(this.isSubleaser);
  }

  userIsSubletter() {
    this.isSubleaser = false;
    console.log('Users new state:' + this.isSubleaser);
    this.navigateToRegistration2Page(this.isSubleaser);
  }


  comparePasswords(password1:string, password2: string): boolean {
    if (password1 == password2) return true;
    else return false;
  }

  navigateToRegistration2Page(isSubleaser: boolean) {
    console.log("navigating...");
    this.navCtrl.push(Registration2Page, {
        isSubleaser: isSubleaser
    });
  }
}

