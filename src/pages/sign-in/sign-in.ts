import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  posts: any;

  email: string;
  password: string;

  constructor(public navCtrl: NavController, private http: Http,  private alertCtrl: AlertController) {


    if (localStorage.getItem("TOKEN")) {
     // alert("Already logged in");
    
      this.http.get("https://homebru-subletting.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
          console.log(err);
        }
      );

    }
  }

  login() {
    this.http
      .post("https://homebru-subletting.herokuapp.com/login", {
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

  popUp() {

    console.log("forgot password");
    let prompt = this.alertCtrl.create({
      title: 'Find Your Homebru account',
      message: "Enter email address to send password reset email to",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        }
        
      ],
      
      buttons: [    
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send Email',
          handler: data => {
            console.log('sending password reset email');
          }
        },
        
      ]
    });
    prompt.present();


  }

}
