import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userStorage = JSON.parse(localStorage.getItem('user'));

  constructor(public db: AngularFireDatabase, public authService: AuthService) {

  }


  getProfileData() {

   this.userStorage = JSON.parse(localStorage.getItem('user'));//give the localStorage time to update so we can read the needed

      console.log("WE IN getProfileData() ")


      console.log("this is USER.UID:   "+this.userStorage.uid)
    return this.db.object('users/' + this.userStorage.uid)
      .valueChanges();

  }
}
