import { Observable } from 'rxjs';
import { OrdersService } from './../../services/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RateCommentComponent } from '../rate-comment/rate-comment.component';
import { Router } from '@angular/router';

export interface ItemsOrder {
  image: string;
  name: string;
  price: any;
  quantity: any;
}

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})

export class OrderHistoryComponent implements OnInit {

  orderSource: any = new MatTableDataSource<ItemsOrder>();
  displayedColumns = ["image", "name", "quantity", "price", "action"];
  emptyHistory: Promise<boolean>;
  dialogOpen: boolean = false;
  ordersExist: boolean=false;


  constructor(private ordersService: OrdersService, private _snackBar: MatSnackBar, private dialog: MatDialog, public router: Router
    ) { }

  ngOnInit(): void {
    this.ordersService.findAllByUserId(JSON.parse(localStorage.getItem("user")).uid)
      .subscribe((value) => {
        this.orderSource.data = value;
        console.log(this.orderSource)
        if (this.orderSource.data.length == 0)
        {
          this.emptyHistory = Promise.resolve(true)
          this.ordersExist=false;
         } //ovo radimo jer zelimo da sacekamo dok se ne load-uje data iz baze podataka
        //pre nego sto se u view-u renderuje tekst o praznoj istoriji, sto radimo putem
        //async pipe-a u html-u, a async pipe zahteva observable. To je upravo nasa
        //promenljiva emptyHistory
        else
        this.ordersExist=true;
      })
  }

  onClick(id: any){
    this.router.navigate(['products/product/'+id])
  }



  deleteOrder(orderID: string) {
    //deleting the order from the database

    this.ordersService.deleteOrderFromDb(orderID);
    setTimeout(() => {
      this._snackBar.open("You successfuly deleted this order from your history.", "OK", { duration: 5000 });
    }, 300);


  }


  rateAndComment(elementId: any, username: string) {
    this.dialogOpen = true;

    const rateDialog = this.dialog.open(RateCommentComponent, { //ovime otvaramo citavu komponentu u okviru jednog dijaloga u okviru iste stranice
      disableClose: true,
      width: "60vw",
      data: { itemId: elementId, username: username }
    });

    rateDialog.afterClosed().subscribe(result => {
      this.dialogOpen = false;
    })
  }

}
