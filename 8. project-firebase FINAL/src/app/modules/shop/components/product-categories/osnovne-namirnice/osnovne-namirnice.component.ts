import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-osnovne-namirnice',
  templateUrl: './osnovne-namirnice.component.html',
  styleUrls: ['./osnovne-namirnice.component.css']
})
export class OsnovneNamirniceComponent implements OnInit,OnDestroy {

  products:any[];
  sub: Subscription;

  constructor( private serviceProducts:ProductService) { }

  ngOnInit(): void {

    this.sub=this.serviceProducts.getBasicProducts()
  .subscribe(products=>this.products=products);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

  showSpecificProduct(category: String, productKey: String){
    this.serviceProducts.showProduct(category,productKey);
  }
}

