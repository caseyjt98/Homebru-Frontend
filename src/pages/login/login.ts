import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
import { Event } from '../../models/event';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public eventArray : Array<Event>= [];   
  constructor(public navCtrl: NavController) {

    // hard code data for some new Event objects
    // push to array
    var event1 = new Event('Snowglobe', 'Music Festival', 'https://bettyandkora.files.wordpress.com/2015/01/zeddsnowglobe.jpg', 340, "Our ultimate goal with SnowGlobe is to transition into a completely sustainable event -- a dream inspired both by the South Lake Tahoe community's culture of environmentalism and our organization's personal belief in the importance of conscientious and ethical event planning. We're happy to report that with help from our amazing partners at Waste Free Earth and Chris' Cleaning, we've made impressive steps year-over-year towards reaching that goal. A tremendous amount of credit is due to you -- our fans -- for supporting us on our journey. Your passion continues to inspire us.")
    var event2 = new Event('Test Kitchen', 'Culinary Experience', 'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/06/20/15569144/32152042_442704436140199_1550968447851036672_n.jpg', 50, "The Test Kitchen, which opened in November 2010, has the celebrated chef cooking at his most creative in a distinctive contemporary space. British-born Luke trained in Switzerland and England before heading to Asia for a five year stint, launching several restaurants in Singapore, Malaysia, South Korea and the Philippines. “My time in Europe taught me to cook; my time in Asia broadened my horizons")
    var event3 = new Event("Dizzy's Karaoke",'Bar', 'https://www.capetownmagazine.com//media_lib/r2/c2d0eee948094aacd22a280c33dd2d13.img.jpg', 1, "A good time")

    this.eventArray.push(event1);
    this.eventArray.push(event2);
    this.eventArray.push(event3);
 
  }


  navigateToProfile() {

    console.log("Navigating...") 

    this.navCtrl.push(ProfilePage);

  }

  navigateToDetails(event: Event) {
    console.log("Navigating...")
    this.navCtrl.push(DetailsPage, { currEvent: event } );

  }

}



// for each item (loop), create a button with that index... link to page with specific info
// we need an array of Event objects --- where does this go?
// constructor to create array of Event objects, which class does this exist in?