import { HTMLAttributes, ReactNode } from 'react';

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	size?: 's' | 'm' | 'l';
}
