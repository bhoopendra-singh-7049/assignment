import { Component, Input } from '@angular/core';
import { ISectionTabModel } from '../../core/models/section-tab.model';
import { IProductModel } from '../../core/models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-section',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
})
export class ProductSectionComponent {
  @Input() grid_col!: number;
  @Input() categoryId!: string;
  @Input() title!: string;
  @Input() tabs: ISectionTabModel[] = [];
  @Input() products: IProductModel[] = [];

  activeTab = 'all';

  setTab(tabId: string) {
    this.activeTab = tabId;
  }

  get filteredProducts(): IProductModel[] {
    return this.products.filter(p =>
      p.categoryId === this.categoryId &&
      (this.activeTab === 'all' || p.subCategoryId === this.activeTab)
    );
  }

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }
}