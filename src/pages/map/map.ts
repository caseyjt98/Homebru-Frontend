import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { Http } from '@angular/http';
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

  // array to store all products from back end
  public listings: Array<Product> = [];
  // array to store map markers for geocoded addresses
  public geocodedMarkers: Array<any> = [];


  // product variables from back end 
  address_number: number;
  street_name: string;
  city: string;
  zip_code: string;
  apt_number: number;


  // google map variables
  map: any;
  geocoder: any;

  // concatenated address with proper format for geocoding
  formatted_address: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    // get all products from database
    this.http.get("https://homebru-subletting.herokuapp.com/products")
      .subscribe(
        response => {
          console.log(response.json());             // print all addresses from database in json format
          this.listings = response.json();          // listings holds all products from back end 
          this.city = "Westwood, Los Angeles";     // all addresses should be in Westwood, LA
          this.zip_code = "90024";                 // all addresses should be within 90024 zip code
        },
        err => {
          console.log(err);
        }
      );

   // this.geocodedMarkers = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    ///////////////// INITIALIZE MAP ////////////////////////
    // The location of Westwood, LA
    var westwood = { lat: 34.063502, lng: -118.445516 };

    // The map, centered at Westwood
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 15, center: westwood });


    // The marker, positioned at Westwood
    var marker = new google.maps.Marker({ position: westwood, map: map });

    console.log("map initialized");


  }


  geocodeAddresses() {
    let i = 0;
    // loop through all listings 
    for (let listing of this.listings) {
      // get current address to geocode 
      console.log(listing);
      this.address_number = listing.address_number;
      this.street_name = listing.street_name;

      // get properly formmated address
      this.formatted_address = String(this.address_number) + " " + this.street_name + ", " + this.city;
      console.log("formatted address: " + this.formatted_address + " ");


      // address to geocode
      var address = this.formatted_address;


      // geocode!
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status == 'OK') {

          console.log("geocoded location: " + results[0].geometry.location);


          var currPosition = results[0].geometry.location;
          this.geocodedMarkers.push(currPosition);

          console.log("geocoded location worked");
          ++i;
          if (i == this.listings.length) {
            this.redisplayMap();
          }
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      })
    }

  }


  redisplayMap() {
    this.map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: { lat: 34.063502, lng: -118.445516 }
      });
      
    console.log("marker positions: " + this.geocodedMarkers);
    for (var i = 0; i < this.geocodedMarkers.length; i++) {
      var position = this.geocodedMarkers[i];
      var marker = new google.maps.Marker({
        position: position,
        map: this.map
      });
    }

  }

}