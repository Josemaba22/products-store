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
  page: number = 0;
  size: number = 3;
  totalPages: number = 0;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts(this.page, this.size).subscribe({
      next: (response: any) => {
        const { content, totalPages } = response;
        this.products = content;
        this.totalPages = totalPages;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  public nextPage(): void {
    if( this.page < this.totalPages - 1) {
      this.page++;
      this.getAllProducts();
    }
  }

  public previousPage(): void {
    if( this.page > 0) {
      this.page--;
      this.getAllProducts();
    }
  }

}
