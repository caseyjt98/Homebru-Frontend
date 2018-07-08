
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

  //make a function to create instance of user
  
  
}