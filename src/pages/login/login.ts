import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {UserService} from "../../services/user.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username: string;
  private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(): void {
    if (!!this.username && !!this.password) {
      this.userService.login(this.username, this.password)
        .subscribe(
          data => {
            if (data) {
              this.navCtrl.setRoot(HomePage);
            } else {
              this.alertController.create({message: "identifiant et mot de passe incorrects"}).present()
            }
          }, error =>
            this.alertController.create({message: "erreur de permission: " + error}).present()
        );
    }
  }
}
