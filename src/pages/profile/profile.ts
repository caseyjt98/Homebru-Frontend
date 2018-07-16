import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage} from '../payment-history/payment-history';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';

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
      console.log("invalid token");
    }

    this.http.get("http://localhost:3000/verify?jwt=" + t)
      .subscribe(
        response => {
          let result = response.json();
          this.email= result.user.email;
          this.first_name= result.user.first_name;
          this.last_name= result.user.last_name;
          console.log("first name "+ this.first_name);
          console.log("email: "+ this.email);
         
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

  editProfile() {
    //edit profile??
    console.log("editing profile...");
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }
  
}