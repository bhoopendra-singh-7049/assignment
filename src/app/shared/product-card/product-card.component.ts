import { Component, Input } from '@angular/core';
import { IProductModel } from '../../core/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: IProductModel;
  @Input() grid_col!: number;

  get isHorizontal(): boolean {
    return this.grid_col === 3;
  }

  get badgeClasses(): string {
    switch (this.product.badge?.type) {
      case 'new':
        return 'bg-[#54d417] text-white';
      case 'discount':
        return 'bg-orange-400 text-white';
      case 'favorite':
        return 'bg-yellow-400 text-gray-900';
      case 'soldout':
        return 'bg-gray-300 text-gray-900';
      case 'deal':
        return 'bg-orange-400 text-white';
      case 'watch_a_lot':
        return 'bg-yellow-400 text-gray-700';
      case 'ordered':
        return 'bg-gray-300 text-gray-900';
      default:
        return '';
    }
  }

  constructor(private readonly cartService: CartService) { }

  addToCart(product: IProductModel): void {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any) {
    console.log('Add to wishlist:', product);
  }

  viewProduct(product: any) {
    console.log('View product:', product);
  }
}
