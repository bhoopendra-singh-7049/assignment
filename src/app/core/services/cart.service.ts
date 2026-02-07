import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private readonly cartItems: IProductModel[] = [];

  addToCart(product: IProductModel) {
    this.cartItems.push(product);
    this.cartCountSubject.next(this.cartItems.length);
  }

  getCartCount(): number {
    return this.cartItems.length;
  }

  getCartItems(): IProductModel[] {
    return this.cartItems;
  }
}
