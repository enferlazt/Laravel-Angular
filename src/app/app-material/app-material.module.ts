import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSliderModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
