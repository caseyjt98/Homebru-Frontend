
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { RegistrationPage } from '../registration/registration';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  posts: any;

  email: string;
  password: string;

  constructor(public navCtrl: NavController, public http: Http) {
 
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    });
 
  }
  /** link this function to our Log In button to make it do something */
  navigateToLogin() {
 
    console.log("Navigating...") 

    this.navCtrl.push(LoginPage); 
  }

  navigateToRegistration() {

    console.log("Navigating...")

    this.navCtrl.push(RegistrationPage);
  }

  //make a function to create instance of user?
  

  login() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        password: this.password
      })
      .subscribe(
        result=> {
          console.log(result);

          var jwtResponse= result.json();
          var token= jwtResponse.tokem;

          localStorage.setItem("TOKEN", token);

          let t = localStorage.getItem("TOKEN");
        },

        err => {
          //Invalid login!!
          console.log(err);
        }
      );
  }
  
}