import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OsnovneNamirniceComponent } from './components/product-categories/osnovne-namirnice/osnovne-namirnice.component';
import { LekovitiDodaciComponent } from './components/product-categories/lekoviti-dodaci/lekoviti-dodaci.component';
import { MaterialModule } from 'src/app/material.module';
import {NgModule} from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { HigijenaIKozmetikaComponent } from './components/product-categories/higijena-i-kozmetika/higijena-i-kozmetika.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { RateCommentComponent } from './components/rate-comment/rate-comment.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations:[
    ShopComponent,
    HigijenaIKozmetikaComponent,
    LekovitiDodaciComponent,
    OsnovneNamirniceComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderHistoryComponent,
    RateCommentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap:[]
})
export class ShopModule{}
