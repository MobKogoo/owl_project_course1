import { ProductModel } from 'interfaces/product.interface';
import { TopLevelCategory, TopPageModel } from 'interfaces/top-page.interface';

export interface ITopPageComponent {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}
