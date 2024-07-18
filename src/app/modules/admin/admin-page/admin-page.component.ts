import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {

  products: Product[] = [];
  page = 0;
  size = 100;
  searchTerm = '';
  totalPages = 0;
  totalElements = 0;

  constructor ( private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  searchProduct(searchTerm: string): void {
    console.log(searchTerm);
  }

  editProduct(product: Product): void {
    console.log(product);
  }

  deleteProduct(id_product: number | undefined): void {
    console.log(id_product);
    if (id_product !== undefined) {
      this.productsService.deleteProduct(id_product).subscribe({
        next: (response: Product) => {
          console.log(response);
          this.getAllProducts();
        },
        error: (error) => {
          console.error(error);
        }
      });
    }

  }

  private getAllProducts(): void {
    this.productsService.searchProduct(this.page, this.size, this.searchTerm).subscribe({
      next: (response: any) => {
        const { content, totalPages, totalElements } = response;
        this.products = content;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
