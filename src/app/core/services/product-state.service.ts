import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import data from '../../data/products.json';
import { IProductModel, ProductData } from '../models/product.model';

const productsData = data as ProductData;

@Injectable({ providedIn: 'root' })
export class ProductStateService {

  products$ = new BehaviorSubject<IProductModel[]>(
    productsData.products
  );

  private readonly categories$ = new BehaviorSubject(
    productsData.categories
  );

  private readonly selectedCategory$ = new BehaviorSubject<string>('all');
  private readonly searchText$ = new BehaviorSubject<string>('');

  categoriesStream$ = this.categories$.asObservable();

  readonly filteredProducts$ = combineLatest([
    this.products$,
    this.selectedCategory$,
    this.searchText$
  ]).pipe(
    map(([products, category, search]) =>
      products.filter(p => {
        const matchCategory =
          category === 'all' || p.categoryId === category;

        const matchSearch =
          p.title.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
      })
    )
  );

  setCategory(category: string): void {
    this.selectedCategory$.next(category);
  }

  setSearch(text: string): void {
    this.searchText$.next(text);
  }
}
