import { ProfileService } from './../../services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from './../../../shop/services/categories.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  categories: any[];
  data: any;
  email: any;
  userStorage = JSON.parse(localStorage.getItem('user'));


  constructor(
    public db: AngularFireDatabase,
    public serviceCategories: CategoriesService,
    public authService: AuthService,
    private _snackBar: MatSnackBar,
    public profileService: ProfileService
  ) { }

   ngOnInit() {

    var firebaseVar = firebase.auth()


    setTimeout(() => {
      this.email=firebaseVar.currentUser.email
    }, 500);



    this.profileService.getProfileData()
      .subscribe(data => {
        this.data = data;

      });

    this.serviceCategories.getAllCategories()
      .subscribe(categories => {this.categories = categories
      }
      );

  }






  isEmpty(form: NgForm): boolean {
    var isAllEmpty: boolean = true;
    Object.keys(form.controls).forEach(control => {
      if (form.controls[control].value)
        isAllEmpty = false;

    });
    return isAllEmpty;

  }


  onSubmit(form: NgForm) {
    var model: Object = {}
    Object.keys(form.controls).forEach(control => {
      if (form.controls[control].value && control !== "password")
        model[control] = form.controls[control].value
    })
    ///*

    //if both email and password fields are filled, don't update user profile, instead show warning that only one of these
    //fields can be changed at a time, since email change requires verification
    if (!(form.controls["email"].value && form.controls["password"].value)) {
      var emailUpdatedMessage: string;
      emailUpdatedMessage=form.controls["email"].value ? " You will now be signed out. Please check your new email for the verification link":""

      Promise.all(
        [
          form.controls["email"].value ? this.authService.updateUserEmail(form.controls["email"].value) : Promise.resolve,
          form.controls["password"].value ? this.authService.updateUserPassword(form.controls["password"].value) : Promise.resolve,
          this.authService.updateFirebaseUserData(this.userStorage.uid, model)
        ]
      )
        .then(() => {this._snackBar.open("You successfuly updated your account."+emailUpdatedMessage, "OK", { duration: 5000 });  //poziva se nakon razresenja promise-a koji vraca set() funkcija, unutar ovog then-a ce se izvrsiti onFulfilled sto otvara snackBar koji obavestava o uspesnosti operacije update
            })
           .catch(() => { this._snackBar.open("Sorry, there has been an issue  with updating your profile", "OK", { duration: 5000 }); }) //u suprotnom, catch ce se aktivirati ako je onRejected promise, sto otvara snackBar koji prikazuje poruku o gresci


      form.reset();

    }
    else{
      this._snackBar.open("You cannot change your email and your password at the same time! Please choose one of these fields to change", "OK", { duration: 3000 });
    }

  }



}

