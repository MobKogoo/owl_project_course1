import cn from 'classnames';
import { FC } from 'react';

import styles from './Tag.module.scss';
import { ITag } from './tag.interface';

const Tag: FC<ITag> = ({
	children,
	size = 'm',
	color = 'ghost',
	className,
	href,
	...rest
}) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.small]: size === 's',
				[styles.medium]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.green]: color === 'green',
				[styles.grey]: color === 'grey',
				[styles.primary]: color === 'primary',
			})}
			{...rest}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};

export default Tag;
