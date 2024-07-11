import { Component, Input } from '@angular/core';
import { Product } from '@core/models/product';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product-page.component.html',
  styleUrl: './card-product-page.component.css'
})

export class CardProductComponent {

  @Input() product?: Product;

}
