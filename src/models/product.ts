import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

// product
export class Product {
    public address_number: number;
    public street_name: string;
    public city: string;
    public zip_code: number;
    public apt_number: number;    // NULL by default bc optional
    public description: string;
    public id: number;
    public image: string;

  

  constructor(address_number: number, street_name: string, city: string, zip_code: number, apt_number: number, description: string, id: number, image: string) {
    this.address_number = address_number;
    this.street_name = street_name;
    this.city = city;
    this.zip_code = zip_code;
    this.apt_number = apt_number; 
    this.description = description;
    this.id = id;
    this.image = image;
     
  }




}