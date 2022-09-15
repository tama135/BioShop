import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  cartNumber: any=localStorage.getItem("cartNumber");



  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public serviceStorage: StorageService

  ) { }



  ngOnInit(): void {
    this.serviceStorage.watchStorage().subscribe(storageCartNumber => {
      this.cartNumber=storageCartNumber;
    })

  }


}
