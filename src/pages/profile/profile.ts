import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PaymentHistoryPage } from '../payment-history/payment-history';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public first_name: string;
  public last_name: string;
  public email: string;
  public base64Image: string;

  constructor(public navCtrl: NavController, private http: Http, private alertCtrl: AlertController, private camera: Camera) {
    let t = localStorage.getItem("TOKEN");
    if (!t) {
      // nav to login if token is invalid
      this.navCtrl.setRoot(HomePage);
      console.log("invalid token");
    }

    this.http.get("https://homebru-subletting.herokuapp.com/verify?jwt=" + t)
      .subscribe(
        response => {
          let result = response.json();
          this.email = result.user.email;
          this.first_name = result.user.first_name;
          this.last_name = result.user.last_name;
          if (!result.user.image) { //User has not yet uploaded a profile picture
            this.base64Image= "";
          }
          else { //User had a profile picture
            this.base64Image = result.user.image;
          }

        },

        err => {
          console.log(err);

        }
      )
  }


  /** Log Out User */
  logout() {
    this.navCtrl.setRoot(HomePage);
    console.log("Logging out...");
  }

  navigateToPaymentHistory() {
    console.log('navigating...')
    this.navCtrl.push(PaymentHistoryPage);
  }

  /** Edit Profile: Name and Email */
  editProfile() {
    let prompt = this.alertCtrl.create({
      title: 'Edit Profile',
      message: "Click Save to Confirm Changes",
      inputs: [
        {
          name: 'firstname',
          placeholder: 'First Name',
        },
        {
          name: 'lastname',
          placeholder: 'Last Name'
        },
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {  //UPDATES PROFILE
            console.log('Saved clicked');

            let t = localStorage.getItem("TOKEN");

            if (data.first_name) {
              this.first_name= data.firstname;
              this.http.patch(`https://homebru-subletting.herokuapp.com/users?jwt=${t}`, { first_name: this.first_name })
            .subscribe(
            response => {
            console.log(response);
            },
            err => {
             console.log(err);
            }
            )
            }

            if (data.lastname) {
              this.last_name= data.lastname;
              this.http.patch(`https://homebru-subletting.herokuapp.com/users?jwt=${t}`, { last_name: this.last_name })
            .subscribe(
            response => {
            console.log(response);
            },
            err => {
             console.log(err);
            }
            )
            }

            if (data.email) {
              this.email= data.email;

          
            this.http.patch(`https://homebru-subletting.herokuapp.com/users?jwt=${t}`, { email: this.email })
            .subscribe(
            response => {
            console.log(response);
            },
            err => {
             console.log(err);
            }
            )
            }
  
          }
        }
      ]
    });
    prompt.present();
    console.log("editing profile...");
  }


  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  /** Edit Profile Picture Using Native Camera */
  editProfilePic() {
    console.log("editing profile pic...");
    let prompt = this.alertCtrl.create({
      title: 'Edit Profile Picture',
      //message: "Click Save to Confirm Changes",

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Take A Picture',
          handler: data => {
            this.makeCamera();
            console.log('Camera clicked');

          }
        },

      ]
    });
    prompt.present();
  }

  /** Create Camera */
  makeCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 400,
      targetHeight: 400
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;

      let t = localStorage.getItem("TOKEN");
      this.http.patch(`https://homebru-subletting.herokuapp.com/users?jwt=${t}`, { image: this.base64Image })
        .subscribe(
          response => {
            console.log(response);
          },
          err => {
            console.log(err);
          }

        )
    }, (err) => {
      // Handle error
      console.log(err);
    });



  }




}