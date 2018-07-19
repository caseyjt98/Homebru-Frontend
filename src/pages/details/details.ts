import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public currProperty: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currProperty= navParams.get('currProperty');
    console.log(this.currProperty.address_number + " " + this.currProperty.street_name + " " + this.currProperty.city);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}