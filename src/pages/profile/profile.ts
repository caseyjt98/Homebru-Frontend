import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';
import { LoginPage } from '../login/login';
import { MyApp } from '../../app/app.component'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  //rootPage: any= ProfilePage;

  constructor(public navCtrl: NavController) {}

  logout() {

    this.navCtrl.setRoot(HomePage);
    console.log("Logging out...");
    //MyApp.rootPage= HomePage;
  }

  navigateToPaymentHistory() {
    console.log('navigating...')
    this.navCtrl.push(PaymentHistoryPage);
  }
  
}