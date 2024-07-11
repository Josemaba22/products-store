import { Component, OnInit } from '@angular/core';
import { PageProductResponse, Product, ProductsResponse } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})


export class ProductsPageComponent implements OnInit{

  products: Product[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 3;
  products$?: Observable<ProductsResponse> | [] ;

  constructor(private productsService: ProductsService) {

    
  }
  
  ngOnInit(): void {
    this.getAllProducts(this.currentPage, this.pageSize);
  }

  private getAllProducts(page: number, size: number): void {
    // this.productsService.getAllProducts(page, size).subscribe({
    //   next: (response: PageProductResponse) => {
    //     console.log(response.content);
    //     const { content, totalPages } = response;
    //     this.products = content;
    //     this.totalPages = totalPages;
    //   },
    //   error: error => {
    //     console.error(error);
    //   }
    // })

    this.products$ = this.productsService.getAllProducts(page, size);
  }

  nextPage(): void {
    if(this.currentPage < this.totalPages - 1){
      this.currentPage++;
      this.getAllProducts(this.currentPage, this.pageSize);
    }
  }

  previousPage(): void {
    if(this.currentPage > 0){
      this.currentPage--;
      this.getAllProducts(this.currentPage, this.pageSize);
    }
  }
  
}
