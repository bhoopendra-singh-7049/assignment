import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../core/models/promo-product.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-popup',
  imports: [CommonModule],
  templateUrl: './cart-popup.component.html',
  styleUrl: './cart-popup.component.css',
})
export class CartPopupComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(public cartService: CartService) {
    this.cartItems$ = new Observable(observer => {
      observer.next(this.cartService.getCartItems());
    });
  }

  remove(item: CartItem): void {
    this.cartService.removeFromCart(item.product.id);
  }

  getTotal(items: CartItem[]): number {
    return items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }
}
