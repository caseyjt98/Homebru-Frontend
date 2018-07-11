import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

export class User {

    public firstname: string;
    public lastname: string;
    public gender: string;
    public userId: number;
    public email: string;
    public password: string;
    public location: string;
    public isSubleaser: boolean;

    constructor() {
        this.isSubleaser = false;        // false by default, will change upon registration
    }

}