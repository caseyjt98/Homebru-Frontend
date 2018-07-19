import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Registration3Page } from '../registration3/registration3';

/**
 * Generated class for the Registration2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration2',
  templateUrl: 'registration2.html',
})
export class Registration2Page {


  is_subleaser: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.is_subleaser= navParams.get('is_subleaser');
    console.log("User status is: " + this.is_subleaser);
  }


  navigateToRegistration3Page(first_name: string, last_name: string, email: string, password: string, password2: string) {
    console.log("navigating...");

    //Compare passwords
    let match: boolean= this.comparePasswords(password, password2);
    //let strong: boolean= this.checkPasswordStrength(password);
    if (match) {
  
    
        this.navCtrl.push(Registration3Page, {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          is_subleaser: this.is_subleaser
        });
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration2Page');
  }

  comparePasswords(password1:string, password2: string): boolean {
    if (password1 == password2) return true;
    else {
      alert ("Passwords do not match");
      return false;
    }
  }

  /** 
  checkPasswordStrength(password: string): boolean {
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
 
    //Check if at least one uppercase
    
    for (var i=0; i< password.length; ++i) {
      if (password[i]== )
    }
  
    return true;
  }
  */



}
