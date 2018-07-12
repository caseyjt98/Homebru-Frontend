import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../models/product';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

export class User {

    //User's saved properties
    //public savedProperties: Array<Property> =[];
  
    public first_name: string;
    public last_name: string;
    public gender: string;
    public id: number;
    public email: string;
    public password: string;
    public location: string;
    public is_subleaser: boolean;

    constructor() {
        this.is_subleaser = false;        // false by default, will change upon registration
    }

}