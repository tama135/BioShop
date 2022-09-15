import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/modules/menu/services/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private _snackBar: MatSnackBar, public serviceStorage: StorageService, private router: Router, public authService: AuthService
  ) {
  }

  id: string = "";
  data: any;
  category: any;
  productQuantity: Array<string>;
  selectedKom: any;
  selectedKg: any;
  cartNumber: string;
  quantityInDB: any;
  currentRate: number = 0;
  commentsNotLoaded: boolean = true;
  commentsLoaded: Promise<boolean>; //za koriscenje uz async pipe, template ceka dok se ne load-uje comment, odnosno dok se ne resolve-uje ova promenljiva
  i: number=0;

  async ngOnInit(): Promise<void> {
    this.selectedKom = "1";
    this.selectedKg = "0.1";
    this.cartNumber = localStorage.getItem("cartNumber");

    this.route.params.subscribe(value => { this.id = value["id"] });
    await this.findProductById(this.id);

  }

  initializeData() {
    this.category = this.data.category.replaceAll('-', ' ')

    if (this.data.unit === 'kom') { //ovaj niz kreiramo samo za komade koji imaju cele brojeve za kolicinu, ako ne stavimo ovaj uslov, program ce pokusati da kreira niz za kolicinu koja za komade mozda i ne bude ceo broj sto baca gresku u konzoli
      console.log("THE BAD ARRAY LENGTH, AKA this.data.quantity:   "+this.data.quantity)
      this.productQuantity = Array(this.data.quantity).fill(0).map((x, i) => i + 1).map(String)//mapirali smo u string tako sto smo na kraju pozvali map i prosledili mu String konstruktor
    }
    this.quantityInDB = this.data.quantity //save quantity in local variable before tinkering with this.data.quantity as it is used in the template

    //prolazimo kroz property-je od objekta koji sadrzi sve zvezdice i racunamo rejting i dodeljujemo this.currentRate
    if (this.data.stars) {
      var i = 0;
      for (const star in this.data.stars) {
        this.currentRate += this.data.stars[star]
        i++;
      }
      this.currentRate /= i;
      this.currentRate = Math.round(this.currentRate) //zaokruzimo na prvi najblizi integer
    }
    //uzimamo komentare iz baze podataka
    this.productService.readCommentsFromDB(parseInt(this.id))
      .subscribe((value) => {
        this.data.comments = value;
        this.commentsLoaded = Promise.resolve(true)  //ovo radimo jer zelimo da sacekamo dok se ne load-uje data iz baze podataka
        //pre nego sto se u view-u renderuje tekst o praznoj istoriji, sto radimo putem
        //async pipe-a u html-u, a async pipe zahteva observable. To je upravo nasa
        //promenljiva emptyHistory
        if (this.data.comments.length > 0){
         this.commentsNotLoaded = false;
        }

      })
  }

  public async findProductById(id: string): Promise<any> {
    return (this.productService.findProductById(id)).subscribe(value => {
      this.data = value;
      this.i++
      console.log("i:  "+this.i)
      console.log("this.data: ")
      console.log(this.data)
      this.initializeData()

    });
  }

  onSubmit() {
    if (this.authService.loggedIn) {

      var quantityInLocalStorage = 0;
      if (JSON.parse(localStorage.getItem("product" + this.id))) {
        quantityInLocalStorage = parseFloat(JSON.parse(localStorage.getItem("product" + this.id)).quantity);
      }

      var selectedQuantity = this.data.unit === 'kom' ? this.selectedKom : this.selectedKg;

      var totalOrderedQuantity: number = Math.round((quantityInLocalStorage + parseFloat(selectedQuantity)) * 100) / 100;//Using Math.round(x*100)/100 to round up to 1 decimal place
      console.log("totalOrderedQuantity: "+totalOrderedQuantity)
      if (totalOrderedQuantity <= this.quantityInDB) {

        var cartnumber: number = +localStorage.getItem("cartNumber");
        var incrementCartNumber = cartnumber++;


        if (localStorage.getItem("product" + this.id) !== null) {//if we already added this product in the cart, now we will only update the product quantity

          var product = JSON.parse(localStorage.getItem("product" + this.id));
          product.quantity = Math.round((parseFloat(product.quantity) + parseFloat(this.data.unit === 'kom' ? this.selectedKom : this.selectedKg)) * 100) / 100;//updating only quantity of product, we're rounding up to 1 decimal
          localStorage.setItem("product" + this.id, JSON.stringify(product));
        } else {
          this.serviceStorage.setItem("cartNumber", "" + ++incrementCartNumber);
          var product = this.data;
          product.quantity = this.data.unit === 'kom' ? this.selectedKom : this.selectedKg;

          localStorage.setItem("product" + this.id, JSON.stringify(product));//ako je proizvod koji dodajemo u kart proizvod koji ne postoji vec u kart, ne povecava se cartNumber vec se menja samo quantity proizvoda koji vec postoji

        }

        //part below is updating our cartNumber

        this._snackBar.open("Successfuly added to cart!", "OK", { duration: 3000 });

        this.cartNumber = localStorage.getItem("cartNumber");
      }
      else {
        this._snackBar.open("Sorry, you cannot order this much. We have " + (Math.round((parseFloat(this.quantityInDB) - quantityInLocalStorage) * 100) / 100) + " " + this.data.unit + " in stock!", "OK", { duration: 3000 });

      }

    }
    else {
      this.router.navigate(['/login'])
    }

  }

}
