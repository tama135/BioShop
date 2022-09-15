import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService, User } from '../auth/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isEditing: boolean = false;
  profileInput!: User; //provera


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public User: UserService) { 
   }

  ngOnInit(): void {
    this.profileInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      address: this.data.user.address,
      password: this.data.user.password,
      date: this.data.date
    }
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileInput.email;
    this.data.user.password = this.profileInput.password;
    this.data.user.address = this.profileInput.address;

    console.log(UserService.dummyUserList);
    console.log(this.data.user);
    this.isEditing = false;
  }

}