import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

//interfejs koje kolone pravimo 
export interface CartTable {
  naziv?: string;
  proizvodjac?: number;
  pol?: string;
  velicina?: string;
  slika?: string;
  cena?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {

  selected = 'S';


constructor(public productService: ProductsService) { }

ngOnInit(): void {

}

add(product: any) {
  product.kolicina += 1;
}

subtract(product: any) {
  
  if (product.kolicina != 1) {
      product.kolicina -= 1;
  } 
}

clearAll(){
  this.productService.orderedProduct = [];
}

totalSum(){
  let sum = 0;
  for(let i=0; i<this.productService.orderedProduct.length; i++){
    sum = sum + this.productService.orderedProduct[i].cena * this.productService.orderedProduct[i].kolicina;
    
  }
  return sum;
}

}
