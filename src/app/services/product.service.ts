import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, CreateProductForm } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiUrl = 'http://localhost:3000/products';

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }

  getProductDetail(id: number) {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  getAdminProductList() {
    return this.http.get<Product[]>(
      this.apiUrl,
    );
  }

  createProduct(product: CreateProductForm) {
    return this.http.post<Product>(
      'http://localhost:3000/products/',
      product
    );
  }

  removeProduct(id: number) {
    return this.http.delete<Product>('http://localhost:3000/products/' + id);
  }

  updateProduct(productId: number, product: CreateProductForm) {
    return this.http.put<Product>(
      'http://localhost:3000/products/' + productId,
      product
    );
  }
}
