import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpModule } from"@angular/http";
import { Http } from '@angular/http';
import { User } from '../../models/user';


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

  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isSubleaser: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController, public http: Http) {
    this.firstname= navParams.get('firstname');
    this.lastname = navParams.get('lastname');
    this.email = navParams.get('email');
    this.password = navParams.get('password');
    this.isSubleaser = navParams.get('isSubleaser');
    console.log("user status on reg3 is: " + this.isSubleaser);
    console.log("user first name on reg3 is :" + this.firstname);
    console.log("user last name on reg3 is :" + this.lastname);
    console.log("user email on reg3 is :" + this.email);
    console.log("user password on reg3 is :" + this.password);
  }

// register new user by calling post to our backend
  async register () {

    var user = new User();
    user.firstname= this.firstname,
    user.lastname = this.lastname,
    user.email = this.email,
    user.password = this.password,
    user.isSubleaser = this.isSubleaser

  this.http.post ("http://localhost:3000/register", user) 
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration3Page');
  }


}
