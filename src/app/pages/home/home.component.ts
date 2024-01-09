import { Component, inject } from '@angular/core'; // khai bao inject
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductComponent } from '../../components/product/product.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service'; // import services
import { Product } from '../../types/Product';
import { AlbumComponent } from '../../components/album/album.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductComponent, NgFor, AlbumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService); // inject vao bien

  productList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  //contruct
}