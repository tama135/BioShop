import { ProfileService } from './../../../auth/services/profile.service';
import { Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ProductService } from '../../services/product.service';
import { map, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  products: any[] = [];
  imageObjectArray = new Array();
  isLoggedIn: boolean

  //isLoggedIn: boolean = false;
  categories: any[];
  favoriteCategory: any;
  promiseTemplate: Promise<boolean>;
  profileSubscription: Subscription;
  productSubscription: Subscription;

  constructor(private serviceProducts: ProductService, public router: Router, public profileService: ProfileService, public authService: AuthService
  ) {
      this.isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true : false;
  }


  imageOnFavoriteCategoryClick(index: any, imageObject: any) {
    let category = imageObject[index].category
    let id = imageObject[index].id
    this.router.navigate([category + '/product/' + id])
  }

  imageOnClick(index: any, imageObject: any) {
    let category = imageObject[index].category
    let id = imageObject[index].id
    this.router.navigate([category + '/product/' + id])
  }

  ngOnInit(): void {


      this.products.length = 0;
      this.imageObjectArray.length = 0;

      setTimeout(() => {

      this.isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true : false;
      this.promiseTemplate = Promise.resolve(true)
      console.log(this.isLoggedIn)


      if (!this.isLoggedIn) { //ako korisnik NIJE ulogovan, prikazati sve kategorije
        this.serviceProducts.getBasicProducts()
          .subscribe(basicProducts => {
            this.products[this.products.length - 1] = basicProducts;
            this.imageObjectArray.push(new Array)

            this.products[this.products.length - 1].forEach((element) => {
              this.imageObjectArray[this.imageObjectArray.length - 1].push({
                image: element.urlImage,
                thumbImage: element.urlImage,
                title: element.name,
                category: element.category,
                id: parseInt(element.key)

              });
            }
            )
          });

        this.serviceProducts.getHealingProducts()
          .subscribe(healingProducts => {
            this.products[this.products.length - 1] = healingProducts;
            this.imageObjectArray.push(new Array)

            this.products[this.products.length - 1].forEach((element) => {
              this.imageObjectArray[this.imageObjectArray.length - 1].push({
                image: element.urlImage,
                thumbImage: element.urlImage,
                title: element.name,
                category: element.category,
                id: parseInt(element.key)
              });
            }
            )
          });

        this.serviceProducts.getHygieneProducts()
          .subscribe(hygieneProducts => {
            this.products[this.products.length - 1] = hygieneProducts;
            this.imageObjectArray.push(new Array)

            this.products[this.products.length - 1].forEach((element) => {
              this.imageObjectArray[this.imageObjectArray.length - 1].push({
                image: element.urlImage,
                thumbImage: element.urlImage,
                title: element.name,
                category: element.category,
                id: parseInt(element.key)
              });
            }
            )
          });


        console.log("NOT LOGGED IN: this.products: ")
        console.log(this.products);

        console.log("NOT LOGGED IN:this.imageObjectArray: ")
        console.log(this.imageObjectArray)

      }

      else {//u suprotnom, ako korisnik JESTE ulogovan, prikazati samo njegovu FAVORITE kategoriju koju je odabrao kada je pravio profil

          this.imageObjectArray.length = 0;

          console.log("LOGGED IN: this.products: ")
          console.log(this.products);

          console.log("LOGGED IN:this.imageObjectArray: ")
          console.log(this.imageObjectArray)

          this.profileSubscription = this.profileService.getProfileData().subscribe((value) => {
              if(value){
                this.favoriteCategory = value;
                this.favoriteCategory = this.favoriteCategory.favoriteCategory
                this.favoriteCategory = this.favoriteCategory.charAt(0).toLowerCase() + this.favoriteCategory.slice(1).replaceAll(' ', '-')


              this.productSubscription = this.serviceProducts.getProductsByCategory(this.favoriteCategory).subscribe((value) => {
                this.products = value
                this.imageObjectArray.length = 0;

                this.products.forEach((element) => {
                  this.imageObjectArray.push({
                    image: element.urlImage,
                    thumbImage: element.urlImage,
                    title: element.name,
                    category: element.category,
                    id: parseInt(element.key)
                  })
                })
              })
            }

          })

      }


    }, 450);



  }


  ngOnDestroy() {
    if (this.productSubscription)
      this.productSubscription.unsubscribe()
    if (this.profileSubscription)
      this.profileSubscription.unsubscribe()
  }





}
