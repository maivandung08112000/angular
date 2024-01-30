import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, CreateProductForm } from '../types/Product';
import { Observable } from 'rxjs';

const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjFlY2ZmYzExNjk1MWRhOTA5Yjk4MCIsImlhdCI6MTcwMzU3NjU5OCwiZXhwIjoxNzA2MTY4NTk4fQ.IEjPL_i_-LolpId4TRtcn55rrunliGy5EkM0XJbJdRg',
  },
};

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

  getAdminProductList() {return this.http.get<Product[]>(this.apiUrl,options);}


  createProduct(product: CreateProductForm) {
    return this.http.post<Product>('http://localhost:3000/products/',product);
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
