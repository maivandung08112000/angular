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


  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the presence of a token in local storage
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    // Store the token in local storage upon successful login
    localStorage.setItem('token', token);
  }

  logout(): void {
    // Remove the token from local storage upon logout
    localStorage.removeItem('token');
  }



  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`http://localhost:3000/register`, body);
  }



}
