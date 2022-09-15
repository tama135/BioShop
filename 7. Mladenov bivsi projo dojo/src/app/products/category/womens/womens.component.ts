import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  constructor(public productService: ProductsService) { }


  filteredProduct: Product[] = [];

  ngOnInit(): void {
    this.filteredProduct = this.productService.getFemaleProducts();
    for(let i=0; i<this.filteredProduct.length; i++){
      this.filteredProduct[i].kolicina = 1;
    }
  }

  add(product: any) {
    product.kolicina += 1;
  }
  
  subtract(product: any) {
    
    if (product.kolicina != 1) {
        product.kolicina -= 1;
    } 
  }

  addToCart(product: Product){
    var i = this.productService.orderedProduct.length;
    this.productService.orderedProduct[i] = product;
    console.log(this.productService.orderedProduct);
  }
}