import { Component, OnInit } from '@angular/core';
import { PageProductResponse, Product, ProductsResponse } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})


export class ProductsPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response: any) => {
        const { content } = response;
        this.products = content;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  public nextPage(): void {

  }

  public previousPage(): void {

  }

}
