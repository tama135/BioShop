import { StorageService } from './../../menu/services/storage.service';
import { AccountData } from './../models/account-data';
import firebase from 'firebase/app';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  loggedIn: boolean;
  username: any;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public serviceStorage: StorageService
  ) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.loggedIn = true;
      } else {
        localStorage.setItem('user', null);
      }
    })
  }




  // Sign in with email/password
  Login(email, password) {

    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified) {
          this.ngZone.run(() => {
            this.router.navigate(['shop']);
            this.username = localStorage.getItem("username");
          });

        }
        else
          window.alert("Please make sure to verify your account using the verification link sent to your address!")

      }).catch((error) => {
        window.alert(error.message)
      })
  }


  createFirebaseUserData(userId: string, data: AccountData) {
    return firebase.database().ref('users/').child(userId).set({
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      city: data.city,
      address: data.address,
      phoneNumber: data.phoneNumber,
      favoriteCategory: data.favoriteCategory,

    });

  }
  updateFirebaseUserData(userId: string, data: any) {
    return firebase.database().ref('users/').child(userId).update(data);

  }

  updateUserEmail(newEmail: string) {

    this.afAuth.user.subscribe(result => {
      if (result) {
        return result.verifyBeforeUpdateEmail(newEmail).then(() => { setTimeout(() => { this.SignOut(); }, 5000); })
      }
      else
        return Promise.reject("There has been an issue with updating your email");
    });
  }

  updateUserPassword(newPassword: string) {
    this.afAuth.user.subscribe(result => {
      if (result) {
        return result.updatePassword(newPassword);
      }
      else
        return Promise.reject("There has been an issue with updating your password");
    })

  }

  // Sign up with email/password
  SignUp(email, password, form: NgForm) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.serviceStorage.setItem("cartNumber", "0");

        this.SendVerificationMail();
        this.createFirebaseUserData(result.user.uid,
          {
            "fullname": form.controls["fullname"].value,
            "username": form.controls["username"].value,
            "email": form.controls["email"].value,
            "city": form.controls["city"].value,
            "address": form.controls["address"].value,
            "phoneNumber": form.controls["phoneNumber"].value,
            "favoriteCategory": form.controls["favoriteCategory"].value,
          });
        this.username = form.controls["username"].value;
        localStorage.setItem("username", this.username)
      }).catch((error) => {
        window.alert(error.message)
      })
  }



  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }


  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result)

        //if the user is new, aka doesn't exist, don't allow sign in with google
        var isNewUser = result.additionalUserInfo.isNewUser;
        if (isNewUser) {
          //delete the created user
          result.user.delete();
          window.alert("You must register before trying to log in with Google")

        } else {
          // your sign in flow
          this.ngZone.run(() => {
            this.router.navigate(['shop']);
          })
        }

      }).catch(() => {
      })
  }


  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
