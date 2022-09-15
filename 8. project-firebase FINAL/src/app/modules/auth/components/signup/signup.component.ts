import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../shop/services/categories.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  categories:any[];

  constructor(private serviceCategories:CategoriesService, public authService: AuthService) {
    this.serviceCategories.getAllCategories()
                           .subscribe(categories=>{this.categories=categories
                          });
  }

  ngOnInit(): void {
  }

}
