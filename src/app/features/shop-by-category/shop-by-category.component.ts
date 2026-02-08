import { Component, OnInit } from '@angular/core';
import { ProductStateService } from '../../core/services/product-state.service';
import { combineLatest, map, Observable } from 'rxjs';
import { IProductCategoryModel, IProductModel } from '../../core/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-shop-by-category',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './shop-by-category.component.html',
  styleUrl: './shop-by-category.component.css',
})
export class ShopByCategoryComponent implements OnInit {
  categories$!: Observable<IProductCategoryModel[]>;
  filteredProducts$!: Observable<IProductModel[]>;

  activeCategoryId: string = 'technology';
  activeCategoryIndex: number = 0;

  constructor(
    private readonly productStateService: ProductStateService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.productStateService.categoriesStream$;

    this.filteredProducts$ = combineLatest([
      this.productStateService.products$
    ]).pipe(
      map(([products]) =>
        this.activeCategoryId === 'all' ? products : products.filter(
          product => product.categoryId === this.activeCategoryId
        )
      )
    );
  }

  onCategoryChange(categoryId: string): void {
    this.activeCategoryId = categoryId;

    this.filteredProducts$ = this.productStateService.products$.pipe(
      map(products =>
        categoryId === 'all'
          ? products
          : products.filter(p => p.categoryId === categoryId)
      )
    );
  }
}
