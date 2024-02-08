import { HTMLAttributes, ReactNode } from 'react';

export interface ITag extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'm';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}
