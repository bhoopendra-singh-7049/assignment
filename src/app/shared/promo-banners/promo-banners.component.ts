import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-banners',
  imports: [],
  templateUrl: './promo-banners.component.html',
  styleUrl: './promo-banners.component.css',
})
export class PromoBannersComponent {
  banners = [
    {
      label: 'Hot Deal',
      titleLine1: 'TOURS SAFE',
      titleLine2: 'TRUE DISCOUNT',
      buttonText: 'Order Now'
    },
    {
      label: 'New Product',
      titleLine1: 'EXPERIENCE TECHNOLOGY',
      titleLine2: 'RELAX HIGHTLY',
      buttonText: 'Order Now'
    }
  ];
}
