import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {}

  navigateToHome() {
      console.log("navigating...");
      this.navCtrl.push(HomePage);
  }

  navigateToPayment() {
      console.log("navigating...");
      this.navCtrl.push(PaymentPage); 
  }
}