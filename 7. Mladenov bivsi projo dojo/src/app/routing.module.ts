import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { WishListComponent } from './account/wish-list/wish-list.component';
import { ReviewComponent } from './account/review/review.component';
import { HistoryComponent } from './account/history/history.component';
import { CartComponent } from './account/cart/cart.component';
import { AdminComponent } from './account/admin/admin.component';
import { AccountComponent } from './account/account.component';
import { DiscountComponent } from './products/discount/discount.component';
import { CategoryComponent } from './products/category/category.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { MensComponent } from "./products/category/mens/mens.component";
import { WomensComponent } from "./products/category/womens/womens.component";
import { KidsComponent } from "./products/category/kids/kids.component";

const rute: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'discount', component: DiscountComponent},
    {path: 'account', component: AccountComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'cart', component: CartComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'review', component: ReviewComponent},
    {path: 'wishlist', component: WishListComponent},
    {path: 'mensFashion', component: MensComponent},
    {path: 'womensFashion', component: WomensComponent},
    {path: 'kidsFashion', component: KidsComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(rute)
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule {

}