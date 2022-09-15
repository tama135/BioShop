import { AccountComponent } from './account/account.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './auth/user.service';
import { FormControl } from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm?: string;
  term!: string;
  
    accountOpened: boolean = false;

    control = new FormControl();
    

    constructor(public userService: UserService, public productService: ProductsService, private dialog: MatDialog){
      
    }

    ngOnInit(): void {
      
    }

      getOrderedProductNumber(){
      let num = 0;
      num = this.productService.orderedProduct.length;
      return num;
    }

    openAccount(userId: number){
        this.accountOpened = true;

        const accountDialog = this.dialog.open(AccountComponent, {
          disableClose: true,
          width: "60vw",
          data: { user: this.userService.getUserId(userId)}
        });

        accountDialog.afterClosed().subscribe(result => {
          this.accountOpened = false;
        })
    }

  }