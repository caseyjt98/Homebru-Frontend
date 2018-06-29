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

    constructor() {}

    static createUser(first_name: string, last_name:string, email: string, password: string, location: string, isSubleaser: boolean): User {
        var user = new User();
        user.firstname= first_name;
        user.lastname= last_name;
        user.email= email;
        user.password= password;
        user.location= location;
        user.isSubleaser= isSubleaser;
        return user;
    }

}