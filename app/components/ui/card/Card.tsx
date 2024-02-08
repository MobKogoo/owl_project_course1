import cn from 'classnames';
import { FC, ForwardedRef, forwardRef } from 'react';

import styles from './Card.module.scss';
import { ICard } from './card.interface';

const Card: FC<ICard> = forwardRef(
	(
		{ children, color = 'white', className, ...rest },
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div
				{...rest}
				className={cn(styles.card, className, {
					[styles.blue]: color === 'blue',
				})}
				ref={ref}
			>
				{children}
			</div>
		);
	}
);

Card.displayName = 'Card';

export default Card;
