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

import { CategorysComponent } from './pages/admin/category/categorys/categorys.component';
import { CreateCategoryComponent } from './pages/admin/category/create-category/create-category.component';
import { EditCategorysComponent } from './pages/admin/category/edit-categorys/edit-categorys.component';

import { UseComponent } from './pages/admin/user/use/use.component';
import { CreateUseComponent } from './pages/admin/user/create-use/create-use.component';
import { EditUseComponent } from './pages/admin/user/edit-use/edit-use.component';

export const routes: Routes = [

  {
    path: '',
    component: DefautComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      // { path: 'admin/products', redirectTo: '/login', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

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


  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'categorys', component: CategorysComponent },
      { path: 'categorys/create', component: CreateCategoryComponent },
      { path: 'categorysEdit/:id', component: EditCategorysComponent },
    ],
  },


  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user', component: UseComponent },
      { path: 'user/create', component: CreateUseComponent },
      { path: 'userEdit/:id', component: EditUseComponent },
    ],
  },


];
