import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './auth/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './account/admin/admin.component';
import { CartComponent } from './account/cart/cart.component';
import { HistoryComponent } from './account/history/history.component';
import { ReviewComponent } from './account/review/review.component';
import { WishListComponent } from './account/wish-list/wish-list.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './products/category/category.component';
import { DiscountComponent } from './products/discount/discount.component';
import { MaterialModule } from 'src/app/material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MensComponent } from './products/category/mens/mens.component';
import { WomensComponent } from './products/category/womens/womens.component';
import { KidsComponent } from './products/category/kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    AccountComponent,
    AdminComponent,
    CartComponent,
    HistoryComponent,
    ReviewComponent,
    WishListComponent,
    ProductsComponent,
    CategoryComponent,
    DiscountComponent,
    ProfileComponent,
    ProductDetailsComponent,
    MensComponent,
    WomensComponent,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ ProductsService, UserService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ AccountComponent, ProductDetailsComponent ]
})

export class AppModule { }
