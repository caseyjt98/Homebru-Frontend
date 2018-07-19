import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/product';
import { MapPage } from '../map/map';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    public listings: Array<Product> = [];

    buttonColor: string= 'clear'; //Default button color

  constructor(public navCtrl: NavController, public http: Http) {

   
    //Get all products from database
    this.http.get("https://homebru-subletting.herokuapp.com/products")
    .subscribe(
        response => {
          console.log(response.json());
          this.listings = response.json();  // result holds all the products in our database as JSON objects
        
          console.log(this.listings[0].address_number);
        },
        err => {
          // Invalid, login!
          console.log(err);
        }
      );

   
}

navigateToMap() {
  console.log("Navigating...") 

  this.navCtrl.push(MapPage); 
}

  navigateToProfilePage() {
      console.log("navigating...");
      this.navCtrl.push(ProfilePage);
  }

  navigateToDetailsPage(property: Product) {
    console.log("navigating...");
    this.navCtrl.push(DetailsPage, {
        currProperty: property
    });
  }

  changeSaveButtonColor() {
    this.buttonColor= '#AEAAAA';
  }

  // redisplay products in price range ---- call this function when the slider is adjusted
  /*
  ProductsInPriceRange() {
    var productArray = this.listings;
    for (let property in this.listings) {
      if (property.price 
    }
  }
  */

  addToSavedProperties() {
    
  }

  
  
}
