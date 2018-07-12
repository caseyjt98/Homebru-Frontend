import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Property } from '../models/property';

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
    public isSubleaser: boolean;

    constructor() {}

}