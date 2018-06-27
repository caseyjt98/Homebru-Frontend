import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'; 

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public currEvent: Event;
  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.currEvent = navParams.get('currEvent');
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}

