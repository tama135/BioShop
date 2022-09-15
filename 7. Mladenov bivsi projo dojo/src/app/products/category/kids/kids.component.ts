import { ProductsService } from 'src/app/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor(public productService: ProductsService) { }


  filteredProduct: Product[] = [];

  ngOnInit(): void {
    this.filteredProduct = this.productService.getKidsProducts();
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
