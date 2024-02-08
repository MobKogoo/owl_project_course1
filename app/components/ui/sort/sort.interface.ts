import { HTMLAttributes, ReactNode } from 'react';

export interface ISort extends HTMLAttributes<HTMLDivElement> {
	setSort: (sort: SortEnum) => void;
	sort: SortEnum;
}

export enum SortEnum {
	Rating,
	Price,
}
