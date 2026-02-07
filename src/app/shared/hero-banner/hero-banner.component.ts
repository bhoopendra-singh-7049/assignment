import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {
  banner = {
    label: 'New Product',
    title1: 'FASHIONABLE WALLETS',
    title2: 'BIG GOOD SALE FOR HER',
    button: 'Order Now',
    bgImage: 'assets/images/hero-wallet.jpg'
  };
}
