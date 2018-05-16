import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Evenement} from "../../models/evenement.model";

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  private evenement: Evenement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evenement = {
      nom: "",
      nbParticipants: 0,
      seance: "",
      startTime: "",
      endTime: ""
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

}
