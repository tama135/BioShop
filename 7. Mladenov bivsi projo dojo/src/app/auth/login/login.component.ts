import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var email = form.value.email;
    var password = form.value.password;
    var user = this.UserService.getUser(email);

    if(!user) {
      this.errorExists = true;
      this.errorText = "No registered user " + email;
      return;
    }

    var isPassValid = this.UserService.isPassOk(email, password);

    if(!isPassValid) {
      this.errorExists = true;
      this.errorText = "Password is incorrect";
      return;
    }

    this.errorExists = false //ukoliko je sve u redu
    this.router.navigate(['']) //redirekcija na welcome komponentu
    
  }

  //DODAT KOD ZA PROVERU
  // variable - default false
show: boolean = false;

// click event function toggle
password() {
    this.show = !this.show;
}

}
