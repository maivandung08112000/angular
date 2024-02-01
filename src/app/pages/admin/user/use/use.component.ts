import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../../../types/User';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-use',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './use.component.html',
  styleUrl: './use.component.css'
})
export class UseComponent {
  user: User[] = [];
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService
    .getAllUserList()
      .subscribe((user) => (this.user = user));
  }

  deleteProduct(id: number): void {
    if (window.confirm('Do you really remove user?')) {
      this.authService
        .removeUser(id)
        .subscribe(
          () =>
            (this.user = this.user.filter(
              (user) => user.id !== id
            ))
        );
    }
  }
}
