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


  map: any;
  geocoder: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    console.log("initialize map");

    // The location of Westwood, LA
    var westwood = {lat: 34.063502, lng: -118.445516};

    // The map, centered at Westwood
    var map = new google.maps.Map(
     document.getElementById('map'), {zoom: 15, center: westwood});


    // The marker, positioned at Westwood
    var marker = new google.maps.Marker({position: westwood, map: map});

  }

      
      
      codeAddress() {
       
        //var address = "Sydney, Australia";
        var address = "638 Landfair Avenue, Westwood, Los Angeles"
        var geocoder = new google.maps.Geocoder(); 
        geocoder.geocode( {'address': address}, function(results, status) {
          if (status == 'OK') {
            this.map = new google.maps.Map(
              document.getElementById('map'), {
              zoom: 17,
              center: results[0].geometry.location });
              
              //this.map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: this.map,
                position: results[0].geometry.location
            });
            console.log("geocoded location worked?");
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
      })
    }
  }
