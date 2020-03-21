import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppMaterialModule} from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarAddNewComponent } from './components/cars/car-add-new/car-add-new.component';
import { CarShowAllComponent } from './components/cars/car-show-all/car-show-all.component';
import { CarSingleComponent } from './components/cars/car-single/car-single.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CarSearchComponent } from './components/cars/car-search/car-search.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarAddNewComponent,
    CarShowAllComponent,
    CarSingleComponent,
    NotificationComponent,
    CarSearchComponent,
    CarEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent],
})
export class AppModule { }
