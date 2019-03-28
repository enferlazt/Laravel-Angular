import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarAddNewComponent} from './components/cars/car-add-new/car-add-new.component';
import {CarShowAllComponent} from './components/cars/car-show-all/car-show-all.component';
import {CarSingleComponent} from './components/cars/car-single/car-single.component';

const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: CarShowAllComponent},
  {path: 'cars/add', component: CarAddNewComponent},
  {path: 'car/:id', component: CarSingleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
