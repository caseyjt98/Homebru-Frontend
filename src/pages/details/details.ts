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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}