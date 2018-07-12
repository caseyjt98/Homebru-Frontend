import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';
import { User } from '../../models/user';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public first_name: string;
  public last_name: string;
  public email: string;

  constructor(public navCtrl: NavController, private http: Http) {
    let t = localStorage.getItem("TOKEN");
    if (!t) {
      // nav to login if token is invalid
      this.navCtrl.setRoot(HomePage);
    }

    this.http.get("http://localhost:3000/verify?jwt=" + t)
      .subscribe(
        response => {
          let result = response.json();
          this.email= result.email;
        },

        err => {
          console.log(err);

        }
      )
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