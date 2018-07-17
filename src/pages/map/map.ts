import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');


    // var centerLA = new google.maps.LatLng({lat: 34.063502, lng: -118.445516}); 

    // The location of Westwood, LA
    var westwood = {lat: 34.063502, lng: -118.445516};

     // The map, centered at Westwood
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: westwood});


    // The marker, positioned at Westwood
    var marker = new google.maps.Marker({position: westwood, map: map});

  }

}
