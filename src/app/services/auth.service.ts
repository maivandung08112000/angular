import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  constructor() {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/login', {
      email,
      password,
    });
  }

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`http://localhost:3000/register`, body);
  }
}
