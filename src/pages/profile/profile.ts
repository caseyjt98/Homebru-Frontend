import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';
import { User } from '../../models/user';
<<<<<<< HEAD
=======
import { Http } from '@angular/http';
>>>>>>> 3325259ac7096e917398e6c9323253a2d4630bcb

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

<<<<<<< HEAD
 // public user: User;

  constructor(public navCtrl: NavController) {
   
=======
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
>>>>>>> 3325259ac7096e917398e6c9323253a2d4630bcb
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