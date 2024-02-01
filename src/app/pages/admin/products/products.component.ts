import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

import { Category } from '../../../types/Category';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  

  ngOnInit(): void {
    this.productService
    .getAdminProductList()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(id: number): void {
    if (window.confirm('Do you really remove product?')) {
      this.productService
        .removeProduct(id)
        .subscribe(
          () =>
            (this.products = this.products.filter(
              (product) => product.id !== id
            ))
        );
    }
  }



  categories: Category[] = [];
  searchTerm: string = '';
  applySearchFilter(): void {
    this.categories = this.categories.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
