

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

  private is_subleaser: boolean;

  constructor(public navCtrl: NavController) {}

  
  userIsSubleaser() {
    this.is_subleaser = true;
    console.log('Users new state:' + this.is_subleaser);
    this.navigateToRegistration2Page(this.is_subleaser);
  }

  userIsSubletter() {
    this.is_subleaser = false;
    console.log('Users new state:' + this.is_subleaser);
    this.navigateToRegistration2Page(this.is_subleaser);
  }

  comparePasswords(password1:string, password2: string): boolean {
    if (password1 == password2) return true;
    else return false;
  }

  navigateToRegistration2Page(is_subleaser: boolean) {
    console.log("navigating...");
    this.navCtrl.push(Registration2Page, {
        is_subleaser: is_subleaser
   });
  }

}

