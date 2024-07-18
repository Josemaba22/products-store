import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component-page';
import { CardProductComponent } from './components/card-product/card-product-page.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent,
    CardProductComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    CardProductComponent,
    SearchComponent
  ]
})
export class SharedModule { }
