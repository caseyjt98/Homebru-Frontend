

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})

export class RegistrationPage {

  private firstname: string;
  private lastname: string;
  private email: string;
  private password: string;
  private confirmedpassword: string;
  private location: string;
  private isSubleaser: boolean;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public http: Http) {}

 
  //Registers new user by calling a post to our backend 
  async register() {

    var matched= this.comparePasswords(this.password, this.confirmedpassword);
      if (!matched) {
        alert("Passwords do not match");
      }
      else { 

        var user= new User();
 
        user.first_name = this.firstname,
        user.last_name= this.lastname,
        user.email= this.email,
        user.password= this.password;
        user.location= this.location,
        user.isSubleaser= this.isSubleaser

        //Post will not occur without a .subscribe, which tells what to do if post is successful 
        // and what to do if it is not
      this.http.post("http://localhost:3000/registration", user)
      .subscribe(
        result=> {
          console.log(result);
          var jwtResponse= result.json();
          var token= jwtResponse.tokem;

          localStorage.setItem("TOKEN", token);

          let t = localStorage.getItem("TOKEN");
        }, 
        err=> {
          //Invalid registration!!
          console.log(err);
        }
      )

      }
      console.log("Post sent for Registration");
      
    }


    comparePasswords(password1: string, password2: string): boolean {

      if (password1== password2) return true;
      else  return false;
      
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
          }
        },
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present()
  }
}

