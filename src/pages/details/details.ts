import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Property } from '../../models/property';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public currProperty: Property;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currProperty= navParams.get('currProperty');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}