import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../types/Product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
}
