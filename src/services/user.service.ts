import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AlertController} from "ionic-angular";


@Injectable()
export class UserService {

  private userConnected: any;

  constructor(private http: HttpClient, private alert: AlertController) {
  }

  login(login, password) {
    const params = {
      login: login,
      password: password
    };

    return this.http.post('/login', JSON.stringify(params), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.userConnected = data;
      return data;
    }).catch((error: any) => this.alert.create({message: error.message}).present());
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
