import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})


export class Transaction {


  public id: number;

  constructor(id: number) {
      this.id = id;
      

  }
}