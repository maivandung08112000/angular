import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../types/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);

  getCategoryList() {
    return this.http.get<Category[]>(
      'http://localhost:3000/Category'
    );
  }
}
