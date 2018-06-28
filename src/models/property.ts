import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})
export class ModelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelsPage');
  }

}

export class Property {

  public address: string;
  public description: string;
  public details: string;
  public image: string;
  public price: number;
  public subleaser: string;
  public contactNum: number;

  constructor(address: string, description: string, details: string, image: string, price: number, subleaser: string, contactNum: number) {
      this.description= description;
      this.address= address;
      this.image= image;
      this.price= price;
      this.details= details;
      this.contactNum= contactNum;
      this.subleaser= subleaser;
      

  }


}