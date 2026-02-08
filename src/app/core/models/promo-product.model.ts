import { IProductModel } from "./product.model";

export interface IPromoProductModel {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    discount: number;
    sold: number;
    stock: number;
    timer: {
        day: number;
        hour: number;
        min: number;
        sec: number;
    };
}

export interface CartItem {
    product: IProductModel | IPromoProductModel;
    quantity: number;
}