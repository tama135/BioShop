import { Product } from './../../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public dialog: MatDialog, public productService: ProductsService) {
  }

  femaleProduct: Product[] = [];
  maleProduct: Product[] = [];
  kidsProduct: Product[] = [];
  filteredProduct: Product[] = [];
  orderedProduct: Product[] = [];


  ngOnInit(): void {
    this.filteredProduct = this.productService.getFilteredProducts();
    console.log(this.filteredProduct.length);

    for(let i=0; i<this.filteredProduct.length; i++){
      this.filteredProduct[i].kolicina = 1;
    }



    //this.femaleProduct = this.productService.getFemaleProducts();
    this.productService.maleProduct = this.productService.getMaleProducts();
    this.productService.femaleProduct = this.productService.getFemaleProducts();
    this.productService.kidsProduct = this.productService.getKidsProducts();

    //console.log(this.femaleProduct);
    console.log(this.productService.femaleProduct);
    console.log(this.productService.kidsProduct);
    console.log(this.productService.maleProduct);
  }


  addToCart(product: Product){
    var i = this.productService.orderedProduct.length;
    this.productService.orderedProduct[i] = product;
    console.log(this.productService.orderedProduct);
  }

  add(product: any) {
    product.kolicina += 1;
}

  subtract(product: any) {
    
    if (product.kolicina != 1) {
        product.kolicina -= 1;
  } 
}
}
