import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

    email= '';
    password= '';

  authService = inject(AuthService);
  router = inject(Router);

  // login(): void {
  //   if (!this.email || !this.password)
  //     return alert('Please fill email and password');
  //   this.authService.login(this.email, this.password).subscribe((res) => { console.log(res);

  //     sessionStorage.setItem('token', JSON.stringify(res.accessToken));
  //       this.router.navigate(['/admin/products']);
  //   });
  // }


  login(): void {
    if (!this.email || !this.password) {
      return alert('Please fill email and password');
    }

    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        console.log(res);
        this.authService.setToken(res.accessToken);
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login failure, show error message, etc.
      }
    )
  }
}
