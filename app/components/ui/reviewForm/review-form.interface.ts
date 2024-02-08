import { ReviewModel } from 'interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface IReviewFormProps extends HTMLAttributes<HTMLDivElement> {
	productId: string;
	isOpened: boolean
}

export interface IReviewProps {
	name: string;
	title: string;
	description: string;
	rating: number;
}

export interface IReviewSentResponse {
	message: string
}