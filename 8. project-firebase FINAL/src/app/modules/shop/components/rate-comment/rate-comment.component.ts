import { ProductService } from './../../services/product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatingStars, Comment } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-rate-comment',
  templateUrl: './rate-comment.component.html',
  styleUrls: ['./rate-comment.component.css']
})
export class RateCommentComponent implements OnInit {

  currentRate: number;
  //@INJECT je dekorator koji oznacava da se radi o custom provideru, a taj custom provider je u ovom slucaju MAT_DIALOG_DATA koji dobijamo od order-history komponente
  constructor(@Inject(MAT_DIALOG_DATA) public data, private productsService: ProductService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

    //dodati proveru da li je korisnik vec ostavio rejting i review za dati proizvod, da ne moze ponovo ILI da se overwrite-uje prvobitna recenzija

    if(!isNaN(this.currentRate)){//provera za slucaj da je korisnik ostavio prazne zvezdice, u kom slucaju se ne update-uje rating
      this.updateStars(this.data.itemId, this.currentRate);

    }
    if (form.value.comment != ""){//provera za slucaj da je korisnik ostavio prazan komentar, u kom slucaju se ne salje komentar u bazu podataka
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var date = year + "-" + month + "-" + day;
      this.insertComment(this.data.itemId, this.data.username, form.value.comment, date);
    }

    if(!isNaN(this.currentRate) || form.value.comment != ""){
      this._snackBar.open("Thank you for your feedback!","OK",{duration: 3000});
    }

  }

  public updateStars(id: string, rating: number){//
    var model: UpdatingStars = {
      "id": id,
      "rating": rating
    }
    this.productsService.updateStars(model)
    .catch(() => {this._snackBar.open("There was a problem with uploading your rating, your submission was unsuccessful", "OK", { duration: 5000 });});
  }


  public insertComment(itemId: string, username: string, content: string, date: string){
    var model: Comment = {
      "itemId": itemId,
      "username": username,
      "content": content,
      "postedAt": date
    }
    this.productsService.insertComment(model).catch(()=>{this._snackBar.open("There was a problem with uploading your review, your submission was unsuccessful", "OK", { duration: 5000 });})
  }

}
