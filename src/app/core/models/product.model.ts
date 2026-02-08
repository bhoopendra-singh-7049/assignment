import { IPromoProductModel } from "./promo-product.model";

export interface IProductModel {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    vendor: string;
    categoryId: string;
    subCategoryId: string;
    badge?: {
        text: string;
        type: 'new' | 'discount' | 'favorite' | 'soldout' | 'deal' | 'watch_a_lot' | 'ordered';
    };
}

export interface ProductData {
    categories: IProductCategoryModel[];
    subCategories: {
        id: string;
        name: string;
        categoryId: string;
    }[];
    products: IProductModel[];
    promoProducts: IPromoProductModel[];
}

export interface IProductCategoryModel {
    id: string;
    name: string;
    icon: string;
}