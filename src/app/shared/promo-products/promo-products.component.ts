import { Component } from '@angular/core';
import { IPromoProductModel } from '../../core/models/promo-product.model';

@Component({
  selector: 'app-promo-products',
  imports: [],
  templateUrl: './promo-products.component.html',
  styleUrl: './promo-products.component.css',
})
export class PromoProductsComponent {
  products: IPromoProductModel[] = [
    {
      id: 1,
      title: 'Apple Macbook Air MWTJ2SA/A Space Grey (2020)',
      price: 1099,
      oldPrice: 1193.71,
      discount: 15,
      sold: 700,
      stock: 300,
      timer: { day: 123, hour: 42, min: 0, sec: 8 }
    },
    {
      id: 2,
      title: 'Apple Watch Series 5 MWV62VN/A',
      price: 514.51,
      oldPrice: 539.06,
      discount: 12,
      sold: 700,
      stock: 300,
      timer: { day: 123, hour: 42, min: 0, sec: 8 }
    }
  ];

  getProgress(product: IPromoProductModel): number {
    return (product.sold / (product.sold + product.stock)) * 100;
  }
}
