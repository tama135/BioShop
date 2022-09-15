import { ProfileComponent } from './modules/auth/components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './modules/auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { VerifyEmailComponent } from './modules/auth/components/verify-email/verify-email.component';
import { HigijenaIKozmetikaComponent } from './modules/shop/components/product-categories/higijena-i-kozmetika/higijena-i-kozmetika.component';
import { LekovitiDodaciComponent } from './modules/shop/components/product-categories/lekoviti-dodaci/lekoviti-dodaci.component';
import { OsnovneNamirniceComponent } from './modules/shop/components/product-categories/osnovne-namirnice/osnovne-namirnice.component';
import { ShopComponent } from './modules/shop/components/shop/shop.component';
import { ProductDetailsComponent } from './modules/shop/components/product-details/product-details.component';
import { CartComponent } from './modules/shop/components/cart/cart.component';
import { OrderHistoryComponent } from './modules/shop/components/order-history/order-history.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  //  {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },

  {path: '', component: ShopComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'higijena-i-kozmetika', component: HigijenaIKozmetikaComponent},
  {path: 'lekoviti-dodaci', component: LekovitiDodaciComponent},
  {path: 'osnovne-namirnice', component: OsnovneNamirniceComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},//VRACA NA LOGIN AKO POKUSAMO RUCNO DA UKUCAMO U URL 'profile'
  {path: ':category/product/:id', component: ProductDetailsComponent}, //we're adding /:id to indicate that we're expecting a route parameter called id and we're adding :category because we're going to have one of the three categories here
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard] }, //VRACA NA LOGIN AKO POKUSAMO RUCNO DA UKUCAMO U URL 'cart'
  {path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard]},//VRACA NA LOGIN AKO POKUSAMO RUCNO DA UKUCAMO U URL 'order-history'


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
