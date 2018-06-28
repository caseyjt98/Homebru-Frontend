import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { Property } from '../../models/property';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    public listings: Array<Property> = [];

  constructor(public navCtrl: NavController) {

    var property1 = new Property("638 Landfair Avenue", "10 person apartment, 5 bedrooms, 4 bathrooms", "details","https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/s720x720/35884124_1801083623268238_2366583428851171328_o.jpg?_nc_cat=0&oh=85f1c805638b6c54f26528e06194d463&oe=5B9F49CF", 800, "Kiana Mills" , 9253239578);
    var property2 = new Property(" 55 Glendale Avenue","4 person apartment, 2 bedrooms, 2 bathrooms", "details","https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/36279806_382960328882776_2552084286136123392_n.jpg?_nc_cat=0&oh=08934c546debc591251cc207a6933f6d&oe=5B9F117B", 900, "Joan" , 9253234578);
    var property3 = new Property(" 34 Midvale Avenue","6 person apartment, 3 bedrooms, 2 bathrooms", "details","https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/33920933_1737920576294232_2860737605442469888_n.jpg?_nc_cat=0&oh=5a7f9e976aba9e5f39824be492235612&oe=5BAE47C1", 1000, "Sue" , 9253239788) ;
    var property4 = new Property(" 16 Kelton Street","7 person apartment, 3 bedrooms,3 bathrooms", "details","https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/34701403_1800030480045072_6375089673361948672_n.jpg?_nc_cat=0&oh=c391956f9729a69426f0a780a81b2aeb&oe=5BB5BC2E", 1000, "Sue" , 9253239788) ;

    this.listings.push(property1);   
    this.listings.push(property2);   
    this.listings.push(property3); 
    this.listings.push(property4);    
}

  navigateToProfilePage() {
      console.log("navigating...");
      this.navCtrl.push(ProfilePage);
  }

  navigateToDetailsPage(property: Property) {
    console.log("navigating...");
    this.navCtrl.push(DetailsPage, {
        currProperty: property
    });
  }

  
  
}
