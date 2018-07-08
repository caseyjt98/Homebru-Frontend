import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';

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

  navigateToPaymentHistory() {
    console.log('navigating...')
    this.navCtrl.push(PaymentHistoryPage);
  }
  
}