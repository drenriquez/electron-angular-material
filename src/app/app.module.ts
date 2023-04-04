import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron-fresh';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { XlsxToJsonComponent } from './xlsx-to-json/xlsx-to-json.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XlsxToJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
