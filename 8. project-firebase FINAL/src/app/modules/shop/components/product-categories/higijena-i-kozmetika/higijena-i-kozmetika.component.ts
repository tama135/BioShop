import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-higijena-i-kozmetika',
  templateUrl: './higijena-i-kozmetika.component.html',
  styleUrls: ['./higijena-i-kozmetika.component.css']
})
export class HigijenaIKozmetikaComponent implements OnInit,OnDestroy {

  products:any[];
  sub:Subscription;

  constructor( private serviceProducts:ProductService) { }

  ngOnInit(): void {

    this.sub=this.serviceProducts.getHygieneProducts()
  .subscribe(products=>this.products=products);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  showSpecificProduct(category: String, productKey: String){
    this.serviceProducts.showProduct(category,productKey);
  }

}
