import { Component } from '@angular/core';
import { IPromoProductModel } from '../../core/models/promo-product.model';
import { Observable } from 'rxjs';
import { ProductStateService } from '../../core/services/product-state.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-promo-products',
  imports: [CommonModule],
  templateUrl: './promo-products.component.html',
  styleUrl: './promo-products.component.css',
})
export class PromoProductsComponent {
  promoProducts$!: Observable<IPromoProductModel[]>;

  constructor(
    private readonly productStateService: ProductStateService,
    private readonly cartService: CartService
  ) {
    this.promoProducts$ = this.productStateService.promoProducts$;
  }

  getProgress(product: IPromoProductModel): number {
    return (product.sold / (product.sold + product.stock)) * 100;
  }

  addToCart(product: IPromoProductModel): void {
    this.cartService.addToCart(product);
  }
}
