import { Component, inject } from '@angular/core'; // khai bao inject
import { ProductComponent } from '../../components/product/product.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service'; // import services
import { Product } from '../../types/Product';
import { AlbumComponent } from '../../components/album/album.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ProductComponent, NgFor, AlbumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  productService = inject(ProductService);
  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.products = products));
  }
}
