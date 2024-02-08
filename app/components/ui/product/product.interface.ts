import { ProductModel } from 'interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface IProduct extends HTMLAttributes<HTMLDivElement> {
  product: ProductModel;
  
}
