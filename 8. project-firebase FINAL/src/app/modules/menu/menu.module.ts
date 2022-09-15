import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations:[
    MenuTopComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap:[]
})
export class MenuModule{}
