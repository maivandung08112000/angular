import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateProductForm } from '../../../types/Product';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../types/Category';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  categories: Category[] = [];
  product: CreateProductForm = {
    title: '',
    description: '',
    image: '',
    category: '',
    price: 0,
  };


  productService = inject(ProductService);
  router = inject(Router);
  categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.categoryService
      .getCategoryList()
      .subscribe((categories) => (this.categories = categories));
  }

  handleSubmitForm() {
    if (!this.product.title) return alert('Them ten san pham');
    this.productService
      .createProduct(this.product)
      .subscribe(() =>
      this.router.navigate(['/admin/products']));
  }



}
