import cn from 'classnames';
import { FC } from 'react';

import MaterialIcon from '../MaterialIcon';

import styles from './Button.module.scss';
import { IButton } from './button.interface';

const Button: FC<IButton> = ({
	children,
	appearance,
	arrow = 'none',
	className,
	...rest
}): JSX.Element => {
	return (
		<button
			className={cn(styles.btn, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...rest}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.arrow_active]: arrow === 'down',
					})}
				>
					<MaterialIcon name="MdArrowForwardIos" />
				</span>
			)}
		</button>
	);
};

export default Button;
