import axios from 'axios';

import { IReviewProps } from '@/ui/reviewForm/review-form.interface';

import { ProductModel } from '../interfaces/product.interface';
import { TopPageModel } from '../interfaces/top-page.interface';

export const API_URL = 'https://courses-top.ru';

export const axiosClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const topApi = {
	async findTopPage(firstCategory: number) {
		return axiosClient.post('/api/top-page/find', {
			firstCategory,
		});
	},
	async byAlias(alias: string | string[] | undefined) {
		return axiosClient.get<TopPageModel>(`/api/top-page/byAlias/${alias}`);
	},
	async findProduct(category: string, limit: number) {
		return axiosClient.post<ProductModel[]>('/api/product/find', {
			category,
			limit,
		});
	},
	async createReview(data: IReviewProps, productId: string) {
		return axiosClient.post('/api/review/create-demo/', {
			...data,
			productId,
		});
	},
};
