import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

export class Menu {
    public id: number;
    public date_to: string;     // number? 
    public date_from: string;
    public price: number;
    
    constructor(id: number, date_to: string, date_from: string, price: number) { 
        this.id = id;
        this.date_to = date_to;
        this.date_from = date_from;
        this.price = price;
      
    }
}