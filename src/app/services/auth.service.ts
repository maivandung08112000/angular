import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/User';
import { EditUserForm } from '../types/User';

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
    // Kiểm tra xem người dùng có được xác thực hay không dựa trên sự hiện diện của mã thông báo trong bộ nhớ cục bộ
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    // Lưu trữ mã thông báo trong bộ nhớ cục bộ khi đăng nhập thành công
    localStorage.setItem('token', token);
  }

  logout(): void {
    // Xóa mã thông báo khỏi bộ nhớ cục bộ khi đăng xuất
    localStorage.removeItem('token');
  }

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`http://localhost:3000/register`, body);
  }

  getAllUserList() {return this.http.get<User[]>('http://localhost:3000/users');}

  removeUser(id: number) {
    return this.http.delete<User>('http://localhost:3000/users/' + id);
  }

  updateUser(userId: string, user: EditUserForm) {
    return this.http.put<User>(
      'http://localhost:3000/users/' + userId,
      user
    );
  }

  getUserDetail(userId: string): Observable<any> {
    const url = `http://localhost:3000/users/${userId}`;
    return this.http.get(url);
  }
}

