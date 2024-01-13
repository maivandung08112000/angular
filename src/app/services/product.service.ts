import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ApiProduct } from '../types/Product';
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
    return this.http.get<ApiProduct[]>(
      this.apiUrl,
    );
  }
}
