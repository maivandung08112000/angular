import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-use',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './create-use.component.html',
  styleUrl: './create-use.component.css'
})
export class CreateUseComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    if (!this.email || !this.password) {
      return alert('Please fill all fields');
    }

    this.authService.register(this.email, this.password)
    .subscribe(
      (res) => {
        console.log(res);
        // Tùy chọn, bạn có thể muốn xử lý việc đăng ký thành công
        alert('Đăng ký thành công. Bây giờ bạn có thể đăng nhập');
        this.router.navigate(['/admin/user']);
      },
      (error) => {
        console.error('Registration failed:', error);
        alert('Đăng ký không thành công. Vui lòng thử lại.');
      }
    );
  }
}
