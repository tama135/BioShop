import { NgModule } from "@angular/core";
import {Routes, RouterModule, Router} from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ShopComponent } from "./shop/shop.component";

const routes: Routes= [
  {path: "", component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'shop', component: ShopComponent}
]


@NgModule({
imports: [
  RouterModule.forRoot(routes)
],
exports: [
RouterModule
]
})

export class RoutingModule{

}
