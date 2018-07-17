import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/product';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    public listings: Array<Product> = [];

    buttonColor: string= 'clear'; //Default button color

  constructor(public navCtrl: NavController) {

    
    var property1 = new Product();
    var property2 = new Product();
    var property3 = new Product();
    

    
    property1.address_number = 638;
    property1.street_name = "Landfair Avenue";
    property1.city = "Los Angeles";
    property1.zip_code = 90024;
    property1.apt_number = 5;
    property1.details = "10 person apartment, 5 bedrooms, 4 bathrooms";
    property1.id = 1;
    //property1.image = "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF";


    property2.address_number = 65;
    property2.street_name = "Kelton Avenue";
    property2.city = "Los Angeles";
    property2.zip_code = 90024;
    property2.apt_number = 4;
    property2.details = "5 person apartment, 2 bedrooms, 2 bathrooms";
    property2.id = 2;
    //property2.image = "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF";


    property3.address_number = 100;
    property3.street_name = "Midvale Avenue";
    property3.city = "Los Angeles";
    property3.zip_code = 90024;
    property3.apt_number = 2;
    property3.details = "5 person apartment, 2 bedrooms, 2 bathrooms";
    property3.id = 3;
    //property3.image = "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF";



   

    this.listings.push(property1);   
    this.listings.push(property2);   
    this.listings.push(property3);     
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

  addToSavedProperties() {
    
  }

  
  
}
