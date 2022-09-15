import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

export interface UpdatingStars {
  id: string;
  rating: number;
}

export interface Comment {
  itemId: string;
  username: string;
  content: string;
  postedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db:AngularFireDatabase, private router: Router ) { }

  findProductById(id: String):Observable<any>{
    return this.db.object('products/' + id)
      .valueChanges();
  }

  updateQuantity(model: Product, productId){
    console.log("model:")
    console.log(model)
    console.log("productId:  "+productId)

    return firebase.database().ref('products/').child(productId).update(model);
  }

   getBasicProducts(){
     return this.db.list('/products', ref=>ref.orderByChild('category').equalTo('osnovne-namirnice'))
     .snapshotChanges()
     .pipe(
       map(change=>change.map(c=>({
         key:c.payload.key, ...c.payload.val() as {}
       })
       ))
     )
   }

   getHygieneProducts(){
    return this.db.list('/products', ref=>ref.orderByChild('category').equalTo('higijena-i-kozmetika'))
    .snapshotChanges()
    .pipe(
      map(change=>change.map(c=>({
        key:c.payload.key, ...c.payload.val() as {}
      })
      ))
    )
  }

  getHealingProducts(){
    return this.db.list('/products', ref=>ref.orderByChild('category').equalTo('lekoviti-dodaci'))
    .snapshotChanges()
    .pipe(
      map(change=>change.map(c=>({
        key:c.payload.key, ...c.payload.val() as {}
      })
      ))
    )
  }

  showProduct(category: String,key: String): any {
    this.router.navigate([category+'/product/' + key]);
  }


  getAllProducts(){
   return this.db.list('/products')
                .snapshotChanges()
                .pipe(
                  map(change=>change.map(c=>({
                    key:c.payload.key, ...c.payload.val() as {}
                  })
                  ))
                )
  }

  getProductsByCategory(category: string){
    return this.db.list('/products', ref => ref.orderByChild('category').equalTo(category)).snapshotChanges().pipe(
      map(change=>change.map(c=>({
        key:c.payload.key, ...c.payload.val() as {}
      })
      ))
    );
  }


  updateStars(model: UpdatingStars){
     return firebase.database().ref('products/').child(model.id).child("stars").push(model.rating);
  }


  insertComment(model: Comment){
    return firebase.database().ref('comments/').push(model); //saljemo order u bazu podataka

  }

  readCommentsFromDB(id: number){
    return this.db.list('/comments', ref => ref.orderByChild('itemId').equalTo(id)).valueChanges();
  }

}
