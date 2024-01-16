import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateProductForm } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';

import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../types/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  categories: Category[] = [];
  categoryService = inject(CategoryService);

  productId: number | undefined;
  product: CreateProductForm = {
    title: '',
    description: '',
    image: '',
    category: '',
    price: 0,
  };

  productService = inject(ProductService);
  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      return this.getProductById();
    });

    this.categoryService
      .getCategoryList()
      .subscribe((categories) => (this.categories = categories));
  }

  getProductById() {
    if (!this.productId) return;
    return this.productService
      .getProductDetail(this.productId)
      .subscribe((product) => (this.product = product));
  }

  handleSubmitForm() {
    if (!this.productId) return;
    if (!this.product.title) return alert('Them ten san pham');
    this.productService
      .updateProduct(this.productId, this.product)
      .subscribe(() => this.router.navigate(['/admin/products']));
  }
}
