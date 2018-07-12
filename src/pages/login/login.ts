import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/product';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    public listings: Array<Product> = [];

    buttonColor: string= 'clear'; //Default button color

  constructor(public navCtrl: NavController) {

    var property1 = new Product();
    //var property2 = new Product();
    //var property3 = new Product();
    //var property4 = new Product();

    property1.address_number = 638;
    property1.street_name = "Landfair Avenue";
    property1.city = "Los Angeles";
    property1.zip_code = 90024;
    property1.apt_number = 5;
    property1.description = "10 person apartment, 5 bedrooms, 4 bathrooms";
    property1.id = 1;
    property1.image = "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF";


    /** 
    var property1 = new Product(638, "Landfair Avenue", "Los Angeles", 90024, 5, "10 person apartment, 5 bedrooms, 4 bathrooms", 1, "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF");
    var property2 = new Product(55, "Glendale Avenue", "Los Angeles", 90024, 2, "4 person apartment, 2 bedrooms, 2 bathrooms", 2, "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/36279806_382960328882776_2552084286136123392_n.jpg?_nc_cat=0&oh=08934c546debc591251cc207a6933f6d&oe=5B9F117B");
    var property3 = new Product(34, "Midvale Avenue","Westood", 90024, 7, "6 person apartment, 3 bedrooms, 2 bathrooms", 3, "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/33920933_1737920576294232_2860737605442469888_n.jpg?_nc_cat=0&oh=5a7f9e976aba9e5f39824be492235612&oe=5BAE47C1") ;
    var property4 = new Product(16, "Kelton Street", "Westwood", 90024, 2, "7 person apartment, 3 bedrooms,3 bathrooms", 4, "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/34701403_1800030480045072_6375089673361948672_n.jpg?_nc_cat=0&oh=c391956f9729a69426f0a780a81b2aeb&oe=5BB5BC2E") ;
    */
   

    this.listings.push(property1);   
    //this.listings.push(property2);   
    //this.listings.push(property3); 
    //this.listings.push(property4);    
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
