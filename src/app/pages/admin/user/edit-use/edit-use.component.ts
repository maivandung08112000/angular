import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUserForm } from '../../../../types/User';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-edit-use',
  standalone: true,
  imports: [ NgFor, FormsModule ],
  templateUrl: './edit-use.component.html',
  styleUrl: './edit-use.component.css'
})
export class EditUseComponent {
  userId: string | undefined;
  user: EditUserForm = {
    email: '',
    password: "",
  };

  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.userId = param['id'];
      return this.getCategoryById();
    });
  }

  getCategoryById() {
    if (!this.userId) return;
    return this.authService
      .getUserDetail(this.userId)
      .subscribe((user) => (this.user = user));
  }

  handleSubmitForm() {
    if (!this.userId) return;
    if (!this.user.email) return alert('Nhập email');
    this.authService
      .updateUser(this.userId, this.user)
      .subscribe(() => this.router.navigate(['/admin/user']));
  }
}
