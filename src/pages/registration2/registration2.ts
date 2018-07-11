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


  isSubleaser: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isSubleaser= navParams.get('isSubleaser');
    console.log("User status is: " + this.isSubleaser);
  }


  navigateToRegistration3Page(firstname: string, lastname: string, email: string, password: string, isSubleaser: boolean) {
    console.log("navigating...");
    this.navCtrl.push(Registration3Page, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        isSubleaser: this.isSubleaser

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration2Page');
  }

}
