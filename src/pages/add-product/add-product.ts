import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
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

  public address_number: number;
  public street_name: string;
  public city: string;
  public zip_code: number;
  public apt_number: number;   
  public details: string;
  public image: string;

  public num_residents: number;
  public num_bathrooms: number;
  public num_bedrooms: number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.address_number= navParams.get('address_number');
    this.street_name= navParams.get('street_name');
    this.city= navParams.get('city');
    this.zip_code= navParams.get('zip_code');
    this.apt_number= navParams.get('apt_number');
    this.num_residents= navParams.get('num_residents');
    this.num_bathrooms= navParams.get('num_bathrooms');
    this.num_bedrooms= navParams.get('num_bedrooms');
    this.details= navParams.get('details');

  }

  // FINISH THIS LATER, make post request for newly created product
  // register new user by calling post to our backend
  
  postProduct () {
    
    var product = new Product();
    product.address_number= this.address_number,
    product.street_name = this.street_name;
    product.city = this.city;
    product.zip_code = this.zip_code;
    product.apt_number = this.apt_number;
    product.details = this.details;
    
    console.log("addres num: "+ product.address_number);
    console.log("street name: "+ product.street_name);
    console.log("city: "+ product.city);
    

    this.http.post("https://homebru-subletting.herokuapp.com/product", product)
    .subscribe(
      result => {
        // This will run when post method succeeded
        console.log(result);
        console.log("post request sent");

      },

      err => {
        console.log(err);
      }
    )

  }

  

  navigateToProfile() {
    console.log("navigating");
    this.navCtrl.push(ProfilePage);
  }

  doConfirm() {
    this.postProduct();
    this.navCtrl.push(ProfilePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

}
