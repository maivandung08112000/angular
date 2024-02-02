import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../../types/Product';
import { ProductService } from '../../../../services/product.service';

import { Category } from '../../../../types/Category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.css'
})
export class CategorysComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  searchTerm: string = '';
  selectedCategory: string = '';

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


  search(): void {
    this.productService
      .getAdminProductList()
      .subscribe((products) => (this.products = products.filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()))));


      this.productService
      .getAdminProductList()
      .subscribe((products) => {
        this.products = products.filter((product) =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          (this.selectedCategory === '' || product.category === this.selectedCategory)
        );
      });
  }

}
