import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { DefautComponent } from './layouts/defaut/defaut.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateProductComponent } from './pages/admin/create-product/create-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from '../../src/app/services/auth.guard';




export const routes: Routes = [

  { path: '',
    component: DefautComponent,
    children: [
      {path: 'login', component: LoginComponent},
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      {path: 'register', component: RegisterComponent},
      { path: 'admin/products', redirectTo: '/login', pathMatch: 'full' },
    ],
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product/create', component: CreateProductComponent },
      { path: 'product/:id', component: EditProductComponent },
    ],
  },

];
