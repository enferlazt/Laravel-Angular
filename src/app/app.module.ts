import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MessageService} from './message.service';
import {HttpErrorHandler} from './http-error-handler.service';
import {CarsComponent} from './components/cars/cars.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
