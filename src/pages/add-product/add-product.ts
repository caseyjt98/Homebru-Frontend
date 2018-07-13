import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  // pass in jwt to this page 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


/**  FINISH THIS LATER, make post request for newly created product
  // register new user by calling post to our backend
  postProduct () {

    var product = new Product();
    product.address_number= this.address_number,
    user.last_name = this.lastname,
    user.email = this.email,
    user.password = this.password,
    user.is_subleaser = this.is_subleaser

    console.log("user created for registration");

    this.http.post("http://localhost:3000/registration", user)
    .subscribe(
      result => {
        // This will run when registration succeeded
        // navigate to home, pass in jwt 
        // this.navCtrl.push()
        console.log(result);

        var jwtResponse = result.json();
        var token = jwtResponse.token;
  
        localStorage.setItem("TOKEN",token);
  
        let t = localStorage.getItem("TOKEN");
      },

      err => {
        // This will run when registration failed
        // pop up alert?
        console.log(err);
      }
    )

    console.log("post request sent");

  }

  */

  navigateToProfile() {
    console.log("navigating");
    this.navCtrl.push(ProfilePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

}
