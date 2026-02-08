import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartPopupComponent } from "../../shared/cart-popup.component/cart-popup.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, CartPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartCount$!: Observable<number>;
  wishlistCount$!: Observable<number>;

  constructor(public readonly cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
    this.wishlistCount$ = this.cartService.wishlistCount$;
  }
}
