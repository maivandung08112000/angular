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

export const routes: Routes = [

  { path: '',
    component: DefautComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product/create', component: CreateProductComponent },
      { path: 'product/:id', component: EditProductComponent },
    ],
  },

  {path: 'login', component: LoginComponent},


  {
    path: 'register', component: RegisterComponent
  },
];
