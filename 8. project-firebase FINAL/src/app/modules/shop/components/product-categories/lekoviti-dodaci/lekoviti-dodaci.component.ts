import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-lekoviti-dodaci',
  templateUrl: './lekoviti-dodaci.component.html',
  styleUrls: ['./lekoviti-dodaci.component.css']
})
export class LekovitiDodaciComponent implements OnInit,OnDestroy {

  products:any[];
  sub: Subscription;

  constructor( private serviceProducts:ProductService) { }


  ngOnInit(): void {

    this.sub=this.serviceProducts.getHealingProducts()
  .subscribe(products=>this.products=products);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }



  showSpecificProduct(category: String, productKey: String){
    this.serviceProducts.showProduct(category,productKey);
  }

}
