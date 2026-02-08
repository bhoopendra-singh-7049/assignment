import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductModel } from '../models/product.model';
import { CartItem, IPromoProductModel } from '../models/promo-product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  showCart: boolean = false;

  private readonly cartItems: CartItem[] = [];
  private readonly cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private readonly wishlistItems: (IProductModel | IPromoProductModel)[] = [];
  private readonly wishlistCountSubject = new BehaviorSubject<number>(0);
  wishlistCount$ = this.wishlistCountSubject.asObservable();

  addToCart(product: IProductModel | IPromoProductModel): void {
    const existingItem = this.cartItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({
        product,
        quantity: 1,
      });
    }

    this.updateCartCount();
  }

  addToWishlist(product: IProductModel | IPromoProductModel): void {
    const exists = this.wishlistItems.some(
      item => item.id === product.id
    );

    if (!exists) {
      this.wishlistItems.push(product);
      this.wishlistCountSubject.next(this.wishlistItems.length);
    }
  }

  getWishlistCount(): number {
    return this.wishlistCountSubject.value;
  }

  private updateCartCount(): void {
    const totalCount = this.cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    this.cartCountSubject.next(totalCount);
  }

  getCartCount(): number {
    return this.cartCountSubject.value;
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  removeFromCart(productId: number): void {
    const index = this.cartItems.findIndex(
      item => item.product.id === productId
    );

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartCount();
    }
  }

  clearCart(): void {
    this.cartItems.length = 0;
    this.cartCountSubject.next(0);
  }
}
