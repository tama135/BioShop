import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  options=["Appliances", "Small household appliances", "Cameras", "Mobile phones", "Computers", "Laptops", "Audio"];



  onSubmit(form: NgForm){
    window.alert("Beep");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
