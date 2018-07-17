import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  posts: any;

  email: string;
  password: string;

  constructor(public navCtrl: NavController, private http: Http) {


    if (localStorage.getItem("TOKEN")) {
     // alert("Already logged in");
    
      this.http.get("http:localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );

    }
  }

  login() {
    this.http
      .post("http:localhost:3000/login", {
        email: this.email,
        password: this.password
  })
  .subscribe (
    result => { 
      console.log(result);

      var jwtResponse = result.json();
      var token = jwtResponse.token;

      localStorage.setItem("TOKEN",token);

      

      this.navigateToLogin();
    },
    err => {
      console.log(err);
      alert("Failed to login");
      this.navigateToLogin();
    }
  );

  }

  navigateToLogin() {
 
    console.log("Navigating...") 

    this.navCtrl.push(LoginPage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
