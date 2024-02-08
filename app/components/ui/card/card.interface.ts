import { HTMLAttributes, ReactNode } from 'react';

export interface ICard extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	color?: 'white' | 'blue'
}
