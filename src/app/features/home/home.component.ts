import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ShopByCategoryComponent } from "../shop-by-category/shop-by-category.component";
import { PromoBannersComponent } from "../../shared/promo-banners/promo-banners.component";
import { PromoProductsComponent } from "../../shared/promo-products/promo-products.component";
import { HeroBannerComponent } from "../../shared/hero-banner/hero-banner.component";
import { ProductSectionComponent } from "../../shared/product-section/product-section.component";
import { IProductModel } from '../../core/models/product.model';
import { ServiceFeaturesComponent } from "../../shared/service-features/service-features.component";
import { Observable } from 'rxjs';
import { ProductStateService } from '../../core/services/product-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [
    CommonModule,
    HeroComponent, ShopByCategoryComponent,
    PromoBannersComponent, PromoProductsComponent,
    HeroBannerComponent, ProductSectionComponent,
    ServiceFeaturesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products$!: Observable<IProductModel[]>;

  constructor(
    private readonly productStateService: ProductStateService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productStateService.products$
  }

  filterProducts(
    products: IProductModel[],
    categoryId: string,
    tabId: string
  ): IProductModel[] {
    return products.filter(p =>
      p.categoryId === categoryId &&
      (tabId === 'all' || p.subCategoryId === tabId)
    );
  }

  techTabs = [
    { id: 'all', label: 'All' },
    { id: 'smart-watch', label: 'Smart Watch' },
    { id: 'laptop', label: 'Laptop' },
    { id: 'tablet', label: 'Tablet' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'accessories', label: 'Accessories' }
  ];

  techProducts: IProductModel[] = []

  watchTabs = [
    { id: 'all', label: 'All' },
    { id: 'mens_watch', label: `Men's Watches` },
    { id: 'womens_watch', label: `Women's Watches` },
    { id: 'smart_watch', label: 'Smart Watches' },
  ]

  cosmeticTabs = [
    { id: 'all', label: 'All' },
    { id: 'lotion', label: 'Lotion' },
    { id: 'mask', label: 'Mask' },
    { id: 'perfume', label: 'Perfume' },
  ]

  realEstateTabs = [
    { id: 'all', label: 'All' },
    { id: 'house', label: 'House' },
    { id: 'land', label: 'Land' },
    { id: 'h_rent', label: 'House for rent' },
    { id: 'l_rent', label: 'Land for rent' },
    { id: 'project', label: 'Project' },
  ]

  luxuryFoodTabs = [
    { id: 'all', label: 'All' },
    { id: 'drinks_preparation', label: 'Drinks - Preparation' },
    { id: 'cereals', label: 'Cereals' },
    { id: 'drink', label: 'Drink' },
    { id: 'resource', label: 'Resources' },
  ]
}
