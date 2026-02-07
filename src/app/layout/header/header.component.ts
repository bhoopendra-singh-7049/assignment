import { Component } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartCount$!: Observable<number>;

  constructor(private readonly cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
  }
}
