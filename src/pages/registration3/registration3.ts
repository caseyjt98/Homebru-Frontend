import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpModule } from"@angular/http";
import { Http } from '@angular/http';
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import { AddProductPage } from '../add-product/add-product';


/**
 * Generated class for the Registration3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration3',
  templateUrl: 'registration3.html',
})
export class Registration3Page {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
  is_subleaser: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public http: Http) {
    this.first_name= navParams.get('first_name');
    this.last_name = navParams.get('last_name');
    this.email = navParams.get('email');
    this.password = navParams.get('password');
    this.is_subleaser = navParams.get('is_subleaser');
    console.log("user status on reg3 is: " + this.is_subleaser);
    console.log("user first name on reg3 is :" + this.first_name);
    console.log("user last name on reg3 is :" + this.last_name);
    console.log("user email on reg3 is :" + this.email);
    console.log("user password on reg3 is :" + this.password);
  }

// register new user by calling post to our backend
  register () {

    var user = new User();
    user.first_name= this.first_name,
    user.last_name = this.last_name,
    user.email = this.email,
    user.password = this.password,
    user.is_subleaser = this.is_subleaser

    console.log("user created for registration");

    this.http.post("https://homebru-subletting.herokuapp.com/registration", user)
    .subscribe(
      result => {
        // This will run when registration succeeded
        // navigate to home, pass in jwt 
        // this.navCtrl.push()
        console.log(result);

        var jwtResponse = result.json();
        var token = jwtResponse.token;
  
        localStorage.setItem("TOKEN",token);
  
        //let t = localStorage.getItem("TOKEN");
      },

      err => {
        // This will run when registration failed
        // pop up alert?
        console.log(err);
      }
    )

    console.log("post request sent");

  }
  
  doConfirm() {
    let confirm = this.alerCtrl.create ( {
      title: 'Allow location access?',
      message: 'Allow access to your current location while using the app?',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.register();

            if (this.is_subleaser == false) {
              this.navigateToLogin();
            }

            else {
              this.navigateToAddProduct(); 
            }
          
          }
        },
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.register();
            if (this.is_subleaser == false) {
              this.navigateToLogin();
            }
            else {
              this.navigateToAddProduct(); 
            }
          }
        }
      ]
    });
    confirm.present()


    // once confirmed, registraton process is done -- make post call to backend
    
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToAddProduct() {
    this.navCtrl.push(AddProductPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration3Page');
  }


}
