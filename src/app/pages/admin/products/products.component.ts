import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';


import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  searchTerm: string = '';
  selectedCategory: string = '';


  ngOnInit(): void {
    this.productService
    .getAdminProductList()
      .subscribe((products) => (this.products = products));
      this.loadProducts();
  }


  currentPage: number = 1;
  itemsPerPage: number = 5; 
  loadProducts(): void {
    this.productService.getAdminProductList().subscribe((products) => {
      this.products = products;
    });
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
