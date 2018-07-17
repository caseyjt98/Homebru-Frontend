

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import { MapPage } from '../map/map';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

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
    /**  
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        //this.posts = data.data.children;
    });
*/
 
  }

  //link this function to our Log In button to make it do something 
  navigateToLogin() {
 
    console.log("Navigating...") 

    this.navCtrl.push(LoginPage); 
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



  navigateToRegistration() {

    console.log("Navigating...")

    this.navCtrl.push(RegistrationPage);
  }
  
  
}
