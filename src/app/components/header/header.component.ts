import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "HomePage";
  menuList = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Shop',
      link: '/shop',
    },
    {
      label: 'admin',
      link: '/admin/products',
    },
  ];
}
