import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { PageablePipe } from '@core/pipes/pageable.pipe';


@NgModule({
  declarations: [
    ProductsPageComponent,
    PageablePipe
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch()) // Configure HttpClient to use fetch API
  ],
})
export class ProductsPageModule { }
