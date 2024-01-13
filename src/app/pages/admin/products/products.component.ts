import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiProduct } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: ApiProduct[] = [];
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService
    .getAdminProductList()
      .subscribe((products) => (this.products = products));
  }
}
