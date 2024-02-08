import { ReviewModel } from 'interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface IReview extends HTMLAttributes<HTMLDivElement> {
	review: ReviewModel;
}
