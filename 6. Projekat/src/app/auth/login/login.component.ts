import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


onSubmit(form: NgForm){
  window.alert("Boop");
}

  constructor() { }

  ngOnInit(): void {
  }

}
