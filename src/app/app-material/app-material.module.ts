import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSliderModule, MatToolbarModule,
  MatGridListModule, MatSnackBarModule,
  MatProgressSpinnerModule
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
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
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
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ]
})
export class AppMaterialModule { }
