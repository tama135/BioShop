import { StorageService } from 'src/app/modules/menu/services/storage.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { Orders, OrdersService } from '../../services/orders.service';
import firebase from 'firebase/app';

export interface ProductsCart {
  id: number,
  image: string;
  name: string;
  quantity: any;
  price: number;
  unit: string;
  maxQuantity: any;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  PRODUCT_DATA: ProductsCart[] = [];
  totalPrice: number;
  cartSource = new MatTableDataSource<ProductsCart>();
  displayedColumns = ["id", "image", "name", "quantity", "price", "action"];
  cartnumber: number = +localStorage.getItem("cartNumber");//the plus sign converts the string that getItem() returns into a number
  data: any[] = [];
  items: any[] = [];

  @ViewChild(MatSort, { static: false }) sort: MatSort; //for the purpose of sorting table by certain columns

  ngAfterViewInit() {
    this.cartSource.sort = this.sort;  //for the purpose of sorting table by certain columns
  }


  constructor(public serviceStorage: StorageService, private _snackBar: MatSnackBar, private productService: ProductService, private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.makeArray()
    this.cartSource.data = this.PRODUCT_DATA;
    this.getTotal();
    this.maxQuantity();
  }



  updateQuantity(id: any, unit: any, updatedQuantity: any, maxQuantity: any) {
    if (unit==='kom'||(unit==='kg'&&updatedQuantity <= maxQuantity)) { //validacija za input polje za slucaj kg item-a, jer bi se inace mogao ukucati bilo koji broj, cak iako premasuje nasu kolicinu u bazi podataka
      var productUpdate = JSON.parse(localStorage.getItem("product" + id))
      productUpdate.quantity = updatedQuantity;
      localStorage.setItem("product" + id, JSON.stringify(productUpdate))

      //updating our table item (from the localStorage)
      this.makeArray()

      //updating the table itself
      this.cartSource.data = this.PRODUCT_DATA;

      //updating the total
      this.getTotal();

      //updating the mat-option array
      this.maxQuantity();
    }
    else {
       this._snackBar.open("Sorry, you cannot order this much. We have " + (maxQuantity - parseFloat(JSON.parse(localStorage.getItem("product" + id)).quantity)) + " in stock!", "OK", { duration: 5000 });
    }
  }

  maxQuantity() {
    //generating an array for our mat-options for Kom items
    this.PRODUCT_DATA.forEach(async (productElement) => {
      (this.productService.findProductById(productElement.id.toString())).subscribe(value => {
        this.data.push(value);     //getting the entire ARRAY of data nodes from the database and putting in this.data cuz of the way we made the updateQuantity() method work - by taking a parameter of type product which has all the data node attributes so we can't just pass the quantity itself, but the entire object of type Product with the updated quantity

        this.data.forEach(dataElement => {
          if (productElement.name == dataElement.name) {
            if (productElement.unit == 'kg') {
              productElement.maxQuantity = dataElement.quantity;
            }
            else
              productElement.maxQuantity = new Array(dataElement.quantity).fill(0).map((element, index) => element = index + 1).map(String);
          }
        })
      });
    })
  }



  deleteFromCart(id: String) {

    this.cartnumber = this.cartnumber - 1;
    this.serviceStorage.setItem("cartNumber", "" + this.cartnumber);

    this._snackBar.open("Successfully deleted from cart!", "OK", { duration: 3000 })
    localStorage.removeItem("product" + id);

    this.makeArray();
    this.cartSource.data = this.PRODUCT_DATA;
    this.getTotal();
    this.maxQuantity();
  }


  onSubmit(form: NgForm) {

    this.saveOrderToDb(form.value.payment)//pozivamo funkciju koja upisuje podatke o porudzbini u bazu podataka i prosledjujemo joj nacin placanja

    //uklanjamo iz localStorage-a sacuvane proizvode, tj proizvode iz korpe
    Object.keys(localStorage)
      .filter((key) => key.startsWith("product"))
      .map(key =>
        localStorage.removeItem(key)
      )

    //WORK: SMANJI QUANTITY U BAZI PODATAKA

    //vracamo cart quantity na nulu
    this.cartnumber = 0;
    this.serviceStorage.setItem("cartNumber", "" + this.cartnumber);//ovime setujemo cartNumber u localStorage-u

    //update-ujemo tabelu
    setTimeout(() => {

    this.makeArray();

    this.cartSource.data = this.PRODUCT_DATA;

    this.getTotal();
  }, 350);


  }

  saveOrderToDb(payment: any) {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var date = year + "-" + month + "-" + day;

    var orderID=firebase.database().ref('orders/').push(); //push() nam daje jedinstveni string

    var model: Orders = {
      "username": localStorage.getItem("username"),
      "userId": JSON.parse(localStorage.getItem("user")).uid,
      "payment": payment,
      "price": this.totalPrice,
      "items": this.getItems(),
      "orderedAt": date,
      "orderID": orderID.key
    }
    console.log("model:")
    console.log(model)


    this.ordersService.insert(model)
       /*
      .then(() => this._snackBar.open("Checkout complete, your order will arrive at the given address in the next 42 hours.", "OK", { duration: 5000 }))
      .catch((errorMessage) => this._snackBar.open(errorMessage, "OK", { duration: 5000 }))
  */
    }


  getItems() {
    this.items.length=0;

    //kreiramo items objekat koji sadrzi sve iste atribute kao PRODUCT_DATA osim maxQuantity jer nam je maxQuantity trebao konkretno samo za potrebe tabele i sortiranja tabele
    this.PRODUCT_DATA.forEach(element =>
      this.items.push({
        "id": element.id,
        "image": element.image,
        "name": element.name,
        "price": JSON.parse(localStorage.getItem("product"+element.id)).price,
        "quantity": parseFloat(element.quantity),
        "unit": element.unit
      })

    )
    console.log("this.PRODUCT_DATA:  ")
    console.log(this.PRODUCT_DATA)

    console.log("this.items: ")
    console.log(this.items)
    return this.items;
  }

  makeArray() {
    this.PRODUCT_DATA.length = 0; //with this, we empty the array before we make it, this is so that once we call this function from
    //deleteFromCart() we don't push the new array elements into an array containing the old array elements

    Object.keys(localStorage)
      .filter((key) => key.startsWith("product"))
      .map((key) => {

        this.PRODUCT_DATA.push({
          id: parseInt(key.substring(7)), //uzimamo broj koji pise nakon reci "product" (koja ima 7 slova)
          image: JSON.parse(localStorage[key]).urlImage,
          name: JSON.parse(localStorage[key]).name,
          price: JSON.parse(localStorage[key]).price * JSON.parse(localStorage[key]).quantity,
          quantity: (JSON.parse(localStorage[key]).quantity).toString(),//VERY important, converting the result toString() bcuz our mat-select and input field take string parameters, not number parameters

          unit: JSON.parse(localStorage[key]).unit,
          maxQuantity: null,

        })


      }
      );
  }

  getTotal() {
    this.totalPrice = 0; //have to reinitialize it to 0 everytime we recalculate, otherwise the new amount will accumulate over the old amount which is not what we want
    this.PRODUCT_DATA.forEach(element => {
      this.totalPrice += element.price
      this.totalPrice=Math.round(this.totalPrice)//zaokruzimo na prvi najveci broj
    })
  }
}
