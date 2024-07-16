import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '@core/models/product';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor( private productService: ProductsService ) { }

  @Output() search = new EventEmitter<string>();

  products: Product[] = [];
  searchTerm: string = '';
  suggestions: string[] = [];

  updateSuggestions(event: KeyboardEvent): void {
      // Aquí iría la lógica para actualizar `suggestions` basada en `searchTerm`
      // Por ejemplo, hacer una petición a un servicio que retorne sugerencias
      // basadas en el texto actual. Esto es solo un placeholder.
      console.log(this.searchTerm);
      this.productService.searchProduct(0, 3,this.searchTerm).subscribe({
        next: (response: any) => {
          const { content } = response;
          this.products = content;
          this.suggestions = this.products.map(product => product.name);
          // this.search.emit(this.products);
        },
        error: (error) => {
          console.error(error);
        }
      });

      // if (this.searchTerm.length > 2) {
      //     this.suggestions = ['Producto 1', 'Producto 2', 'Producto 3']; // Simulación de sugerencias
      // } else {
      //     this.suggestions = [];
      // }
  }

  selectSuggestion(suggestion: string): void {
      this.searchTerm = suggestion;
      this.suggestions = [];
      this.search.emit(this.searchTerm);
  }
}
