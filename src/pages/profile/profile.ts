import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';
import { User } from '../../models/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

 // public user: User;

  constructor(public navCtrl: NavController) {
   
  }

  logout() {

    this.navCtrl.setRoot(HomePage);
    console.log("Logging out...");
  }

  navigateToPaymentHistory() {
    console.log('navigating...')
    this.navCtrl.push(PaymentHistoryPage);
  }
  
}