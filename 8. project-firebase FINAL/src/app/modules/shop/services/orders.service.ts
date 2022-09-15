import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs-compat/add/operator/first';
import {  take } from 'rxjs/operators';


export interface Orders {
  username: string;
  userId: string;
  payment: string;
  price: any;
  items: any;
  orderedAt: any;
  orderID: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  data: any[] = [];
  constructor(private productService: ProductService, private db: AngularFireDatabase, private _snackBar: MatSnackBar) { }

  public insert(model: Orders) {
    //updating database quantity property for each given item

    this.data.length=0;

    model.items.forEach((element, index) => {
      this.productService.findProductById(element.id).first().subscribe(value => {//.pipe(take(1), map(user => {
        this.data.push(value);
        this.data[index].quantity = Math.round(this.data[index].quantity * 100) / 100 - Math.round(element.quantity * 100) / 100
        this.data[index].quantity = Math.round(this.data[index].quantity * 100) / 100
        console.log("this.data[index].quantity:   " + this.data[index].quantity)
        console.log("UNUTAR SUBSCRIBE-A")

      });


      setTimeout(() => {

        //  console.log("this.data[index]")
        //  console.log(this.data[index])

        //  console.log("element.id:   "+element.id)

        //funkcija updateQuantity() smanjuje kolicinu u bazi podataka za onoliko koliko je naruceno u shopping cart


        console.log("this.data[index]:   ")
        console.log(this.data[index])
        console.log("element.id:  " + element.id)

        this.productService.updateQuantity(this.data[index], element.id)


        /*
   .catch(() => {
     return Promise.reject("Failed to update item quantity in database!");
     //vracamo caller-u rejected Promise sa porukom koja objasnjava zasto je rejected (ovu poruku ce da uhvati caller i prikazace je korisniku kroz snackBar)
   });
  */
      }, 450);
    })


    return firebase.database().ref('orders/').push().set(model); //saljemo order u bazu podataka
  }




  findAllByUserId(id: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(id)).valueChanges();

  }




  deleteOrderFromDb(orderID: string) {

    firebase.database().ref('orders/').orderByChild('orderID').equalTo(orderID).once('child_added', snapshot => {
      snapshot.ref.remove().catch(() => {
        window.alert("Sorry, there has been an issue  with deleting your order")
      }
      )

    })

  }
}
