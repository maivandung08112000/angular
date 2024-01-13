import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/Product';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: Product;
  productId: number | undefined;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      return this.getProductById();
    });
  }

  getProductById() {
    if (!this.productId) return;
    return this.productService
      .getProductDetail(this.productId)
      .subscribe((product) => (this.product = product));
  }
}
