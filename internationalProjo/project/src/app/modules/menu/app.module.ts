import { NgModule } from '@angular/core';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MaterialModule } from 'src/app/material-ui.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {BrowserModule} from "@angular/platform-browser"


@NgModule({
    declarations: [MenuTopComponent],
    imports: [
      MaterialModule,
      AppRoutingModule,
      BrowserModule

    ],
    exports:[MenuTopComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleMenu{ }