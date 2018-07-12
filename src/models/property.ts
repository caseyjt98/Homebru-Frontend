import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

export class Property {
    public address_number: number;
    public street_name: string;
    public city: string;
    public zip_code: number;
    public apartment_number: number;    // NULL by default bc optional
    public description: string;
    public id: number;

  public details: string;
  public image: string;
  //public price: number;
  //public subleaser: string;
  //public contactNum: number;
  

  constructor(address_number: number, street_name: string, city: string, zip_code: number, apartment_number: number, decription: string, id: number, details: string, image: string) {
    this.address_number = address_number;
    this.street_name = street_name;
    this.city = city;
    this.zip_code = zip_code;
    this.apartment_number = apartment_number; 
    this.description = this.description;
    this.id = id;
    this.details = details;
    this.image = image;
     
  }


}